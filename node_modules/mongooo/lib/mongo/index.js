const {MongoClient}  = require('mongodb');

class Mongo{
  constructor(){
    this.url = new String();
    this.database = new String();
    this.collection = new String();
  }
  
  setup = async (u = new String(),d = new String(),c = new String()) => {
    this.url = u;this.database = d;this.collection = c;  
    const conn =  await MongoClient.connect(u,{useNewUrlParser:true, useUnifiedTopology:true})
    const client =  await conn.db(d).collection(c);  
    return client;    
  }  
  
}

module.exports = Mongo;
