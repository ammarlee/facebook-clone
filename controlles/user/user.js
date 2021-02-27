const path = require("path");
const fs = require("fs");
const Post = require(path.join(__dirname,"../../models/post"));
const User = require(path.join(__dirname,"../../models/user"));
const Chat = require(path.join(__dirname,"../../models/chat"));
const io = require(path.join(__dirname,'../../socket'))
const Msg = require(path.join(__dirname,"../../models/message"));
const clody =require(path.join(__dirname,'../cloud'))
const { cloudinary } = require(path.join(__dirname,"../cloudinary"));

exports.profile = async (req, res, next) => {
  const friendId = req.params.friendId;
  const userId = req.body.userId;
  try {
    const user = await User.findOne({ _id: friendId });
    // 1-check if the user is exist friends List or not 
    const isFriend = user.newFriendsTest.some((p) => {
      return p.friendId.toString() == userId.toString();
    });
    // 2-check if the user is exist friend requests or not 
    const isinRequests = user.friendsRequests.some((i) => {
      console.log(i);
      return i.toString() == userId.toString();
    });

    res
      .status(200)
      .json({
        infriendsList: isFriend,
        inRequestFriends: isinRequests,
        user,
        msg: "you got your profile informations",
      });
  } catch (error) {
    res.status(400).json({ error, successful: false });
  }
};
exports.getSpecificUser=async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findOne({ _id: userId }).lean();
    res
      .status(200)
      .json({
        user,
        msg: "you got your profile informations",
      });
  } catch (error) {
    res.status(400).json({ error, successful: false });
  }
};

exports.getUserWithToken=async (req, res, next) => {
  const userToken = req.params.userToken;
  try {
    const user = await User.findOne({ userToken: userToken }).lean();
    res
      .status(200)
      .json({
        user,
        msg: "you got your profile informations",
      });
  } catch (error) {
    res.status(400).json({ error, successful: false });
  }
};
exports.currentUser = async (req, res, next) => {
  let userId = req.params.id || req.user._id;
  console.log(userId);
  try {
    const user = await User.findOne({ _id: userId }).lean();
    res.status(200).json({ user, success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, successful: false });
  }
};
exports.EditProfile = async (req, res, next) => {
  const userId = req.params.userId;
  const { name, email, age, city, phone, bio } = req.body;
  const files = req.body.img;
  // console.log(files);
  try {
    if (!files) {
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { name, email, age, city, phone, bio },
        { new: true }
      );
      return res
        .status(200)
        .json({ user, msg: "you have edited your profile" });
    }
    const respo = await cloudinary.uploader.upload(files, {
      upload_preset: "byr4al94",
    });
    const newImage = respo.secure_url;
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { name, email, age, city, bio,phone, img: newImage }
    );
    const pic = await User.findOne({ _id: userId });
    pic.pics.push(newImage);
    await pic.save();

    return res.status(200).json({ user:pic, msg: "you have edited your profile" });
  } catch (error) {
    res.status(400).json({ error, successful: false });
  }
};

exports.EditCover = async (req, res, next) => {
  const userId = req.params.userId;
  let files = req.files
  try {
    const uploader = async(path)=>await clody.uploads(path)
    let urls = []
    for(let file of files){
      const {path} = file
      const newpath = await uploader(path)
      urls.push(newpath)
    }
    const images = urls.map(p=>{
      return p.url
    })
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { coverImg: images[0] }
    );
    return res
      .status(200)
      .json({ user,newImage:images[0], msg: "you have edited your profile cover image" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, successful: false });
  }
};
exports.othersMsg=async(req,res,next)=>{
  console.log(req.body);
  const { userId, otherId } = req.body;
  try {
    const chat = new Chat({
      users: { userId, otherId },
    });
    let newChat = await chat.save();
    const user = await User.findByIdAndUpdate(
      { _id: userId },
      { $push: { otherMessages: { otherId, chatId: newChat } } },
      { new: true }
    );
    const SecondUser = await User.findByIdAndUpdate(
      { _id: otherId },
      { $push: { otherMessages: { otherId:userId, chatId: newChat } } },
      { new: true }
    );
    res.status(200).json({ msg: "youother msg ", user, SecondUser,
  chatId:newChat });

    
  } catch (error) {
    res.status(400).json({ error });
  }

}
exports.acceptNewFriend = async (req, res, next) => {
  try {
    const { userId, friendId } = req.body;
    const chat = new Chat({
      users: { userId, friendId },
    });
    let newChat = await chat.save();

    // THE FIRST USER
    const user = await User.findByIdAndUpdate(
      { _id: userId },
      { $push: { newFriendsTest: { friendId, chatId: newChat } } },
      { new: true }
    );

    const user2 = await User.findByIdAndUpdate(
      { _id: userId },
      { $pull: { friendsRequests: friendId } }
    );
// the other user
    const friend3 = await User.findByIdAndUpdate(
      { _id: friendId },
      { $pull: { friendsRequests: userId } },
      { new: true }
    );

    const friend = await User.findByIdAndUpdate(
      { _id: friendId },
      { $push: { newFriendsTest: { friendId: userId, chatId: newChat } } }
    );
    
  //  return res.status(200).json({user,friend,msg:'you have added a new post'})
  
   res.status(200).json({ msg: "you have added new friend", user, friend });
    // }
  } catch (error) {
    res.status(400).json({ error });
  }
};
exports.friendRequestnotifications = async (req, res, next) => {
  const { userId, friendId, img, name,msg } = req.body;
  try {
    const user = await User.findOne({ _id: friendId });
    const date = Date.now()
    // const ye = new Intl.DateTimeFormat('en', { yearx : 'numeric' }).format(d);
    // const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    // const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    //  let theDate = `${da}-${mo}-${ye}`
    const h = { friendId:userId, img, name, date ,msg};
    user.friendsNotifications.push(h);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};
exports.pushAllNotifications = async (req, res, next) => {
  const { userId, friendId, name, msg, img,action,postId } = req.body;
  try {
    const user = await User.findOne({ _id: friendId });
    const h = {
       friendId, 
       userId,
        img,
        action,
        name, 
        date:Date.now(),
        msg,
        postId };
    user.AllNotifications.unshift(h);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
exports.rejectNewFriend = async (req, res, next) => {
  try {
    const { userId, friendId } = req.body;

    const user2 = await User.findByIdAndUpdate(
      { _id: userId },
      { $pull: { friendsRequests: friendId } }
    );

    const friend2 = await User.findByIdAndUpdate(
      { _id: friendId },
      { $pull: { friendsRequests: userId } }
    );

    res.status(200).json({ msg: "you have added new friend", user2, friend2 });
  } catch (error) {
    res.status(400).json({ error });
  }
};
exports.addFriendRequest = async (req, res, next) => {
  const { userId, friendId } = req.body;
  try {
    // 1-get the friend data with id and add id for the user to it 
    const friend = await User.findOneAndUpdate(
      { _id: friendId },
      { $push: { friendsRequests: userId } },
      { new: true }
    );
    // 1-get the another user data with id and add id for the friend to it 
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $push: { friendsRequests: friendId } },
      { new: true }
    );
    //    await  Promise.all([friend, user])
    res.status(200).json({ user, friend });
  } catch (error) {
    res.status(404).json({ error });
  }
};
exports.getFriends = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const friends = await User.findOne({ _id: userId }).lean()
    .populate({
        path:'newFriendsTest.friendId',
        select:'name age img ',
        model:'User',

    }).exec();
   
    res
      .status(200)
      .json({
        successful: true,
        msg: "you have friends",
        friends:friends.newFriendsTest
      });
  } catch (error) {
    res.status(400).json({ error, successful: false });
  }
};

exports.testChat = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const friends = await User.findOne({ _id: userId }).lean()
      .populate({
        path: "newFriendsTest",
        populate: {
          path: "friendId ",
          select: "name img email",
          model: "User",
        },
      })
      .exec();
    res.status(200).json({ friends: friends.newFriendsTest });
  } catch (error) {
    res.status(400).json({ error, successful: false });
  }
};
exports.getMessage = async (req, res, next) => {
  const chatId = req.params.id;
  try {
    const ChatDetails = await Chat.findOne({_id: chatId}).lean();
    const chat = await Msg.find({ chatId: chatId }, null, {
      sort: {
        timeStamp: 1,
      },
    }).lean()
      .populate({
        path: "sender",
        select: "name img email",
        model: "User",
      })
      
    res.status(200).json({ chat,ChatDetails, successful: true });
  } catch (error) {
    res.status(400).json({ error, successful: false });
  }
};
exports.friendsRequests = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const friends = await User.findOne({ _id: userId }).lean()
      .populate("friendsRequests")
      .exec();
    const filterFriends = friends.friendsRequests.map((p) => {
      return {
        name: p.name,
        _id: p._id,
        img: p.img,
      };
    });

    res
      .status(200)
      .json({
        successful: true,
        msg: "you have friends",
        friends: filterFriends,
      });
  } catch (error) {
    res.status(400).json({ error, successful: false });
  }
};
exports.deletFriend = async (req, res, next) => {
  const friendId = req.params.friendId;
  const userId = req.body.userId;
  try {
    const user1 = await  User.updateOne(
      { _id: userId },
      { $pull: { 'newFriendsTest': { friendId: friendId }} } ,{
        multi: false
    })
    const user2 = await  User.updateOne(
      { _id: friendId },
      { $pull: { 'newFriendsTest':{ friendId: userId }}  },{
        multi: false
    })
    res
      .status(200)
      .json({ userfinsih:user1, successful: true, msg: "you have deleted a friend" });
  } catch (error) {
    res.status(400).json(error);
  }
};
