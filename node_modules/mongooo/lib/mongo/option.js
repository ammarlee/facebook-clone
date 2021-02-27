const {ObjectID, MongoClient}  = require('mongodb');

const objectID = (param = new String()) => {
  return new ObjectID(param);  
}

const con = async ({url, database, collection}) => {
  const conn =  await MongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
  const client =  await conn.db(database).collection(collection);  
  return{conn, client};
}

module.exports = {objectID};