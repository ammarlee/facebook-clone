<template >
  <div class="home" id="theMainHome">
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-app>
      <v-main class="grey lighten-3" v-if="currentUser">
        <v-container id="inspire" fluid >
          <v-row>
            <!-- left bar content -->
            <v-col cols="12" sm="3" class="d-none d-sm-block rounded-lg">
              <v-sheet rounded="lg" min-height="268">
              
                <router-link :to="'/profile/'+user._id" tag="div">
                  <v-list two-line class="pb-0" style="cursor: pointer">
                    <template>
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-img :src="user.img"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title
                            class="text-capitalize font-weight-bold"
                            v-html="user.name"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-list>
                </router-link>
                <app-links></app-links>
              </v-sheet>
            </v-col>
            <!-- contnent of all -->

            <app-content></app-content>
            <!-- right bar content -->
            <v-col cols="12" sm="3" class="d-none d-sm-block">
              <v-sheet rounded="lg" height="268">
                <router-link
                  to="/massage"
                  tag="h3"
                  class="text-capitalize pt-3=2 text-center"
                >online</router-link>
                <app-onlineUsers></app-onlineUsers>
              </v-sheet>
            </v-col>
            <!-- pop up chat msg -->
            <app-chatting
              id="theChatBox"
              v-if="hideMsg "
              :style="{  top: $screen.height -390  + 'px' }"
              :chatIdfromanother="getChatId"
            ></app-chatting>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import content from "./user/includesComponent/content";
import socktConnect from "socket.io-client";
import Functions from "../../server/api";
import onlineUsers from "./massage/onlineUsers";
import chatting from "./massage/massageTest";

export default {
  name: "Home",
  components: {
    "app-content": content,
    "app-onlineUsers": onlineUsers,
    "app-chatting": chatting,
  },
  data() {
    return {
      socket: "",
      thePosition: "",
    };
  },

  mounted() {
    if (this.user) {
      this.socket = socktConnect("http://localhost:3000");
      // join the room
      this.socket.emit("joinnotificationsRoom", this.$store.getters.getUser);

      this.socket.on("newMsgFromUrFriend", (data) => {
        this.playSound(
          "http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3"
        );
        let pushMsg = {
          chatId: data.chatId,
          content: data.content,
          senderImg: data.sender.img,
          senderName: data.sender.name,
          senderId: data.sender._id,
          date: Date.now(),
        };

        this.$store.commit("pushNewMessage", pushMsg);
      });
      //  socket for likes
      this.socket.on("newLikeNotification", (data) => {
        console.log("home page notification for like");
        this.addTheNotification(data);
        this.playSound(
          "http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3"
        );
      });
      //   socket for new comments
      this.socket.on("newCommentNotification", (data) => {
        console.log("home page notification for comments");
        this.addTheNotification(data);
        this.playSound(
          "http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3"
        );
      });

      // //  get notification for friends request
      this.socket.on("newRequest", (data) => {
        console.log("from the home vue ");
        this.playSound(
          "http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3"
        );
        const all = {
          user: this.$store.getters.getUser._id,
          action: data.action,
          name: data.name,
          userId: data.userId,
          friendId: data.friendId,
          img: data.img,
          msg: data.msg,
          date: data.date,
        };

        this.$store.commit("friendRequestNotifications", all);
      });
    } else {
      let userToken = localStorage.getItem("userToken");
      if (userToken) {
        Functions.getuserWithToken(userToken).then((currentUser) => {
          this.$store.dispatch("setUser", currentUser.data.user);
          this.$store.dispatch("setAuth", currentUser.data.authanticated);
          this.$store.commit(
            "setNotifications",
            currentUser.data.user.friendsNotifications
          );
          this.$store.commit(
            "setAllNotificationsAfterLogin",
            currentUser.data.user.AllNotifications
          );
          this.$store.commit(
            "setUserMessages",
            currentUser.data.user.messageNotifications
          );
        });
      } else {
        this.$router.push("/login");
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    getChatId() {
      return this.$store.getters.chatId;
    },
    height() {
      return window.innerHeight;
    },
    hideMsg() {
      return this.$store.getters.hideMsg;
    },
    getTheWidth() {
      let s = "";
      window.addEventListener("resize", () => {
        s = window.innerHeight;
      });
      return s;
    },
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.thePosition = window.innerHeight - 334;
    },
    nag() {
      console.log(window.innerHeight);
      // return window.innerHeight
      window.addEventListener("resize", () => {
        return window.innerHeight;
      });
      //   this.thePosition = window.innerHeight-334;
      //        window.scrollTo({
      //   top: 300,
      //   behavior: 'smooth'
      // });
    },

    addTheNotification(data) {
      this.sweetAlertwithImage(
        data.name,
        data.msg,
        data.img,
        "50",
        "50",
        "bottom-left",
        "5000"
      );

      this.$store.commit("setAllNotifications", data);
    },
  },
};
</script>
<style lang="scss" scoped>
#theChatBox {
  position: fixed;
  left: 80px;
  min-height: 220px;
  max-height: 221px;
  width: 320px;
}
</style>
