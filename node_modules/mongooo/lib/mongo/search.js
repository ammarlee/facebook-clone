const {createObjText} = require('../transform/index');

const setField = (client, field = new Array()) => {
  if(field.length === 0) return false;  
  let i = 0;
  let len = field.length;
  while(i<len){    
    let tmp = createObjText(field[i]);
    await client.createIndex(tmp);
    i++;
  }  
  return true;
}

const searchText = (client, param = new String(), field = {}, lim = 100, sort = {}) => {  
  let res = await client.find( { $text : { $search : param} }, { projection : field } ).limit(lim).sort(sort).toArray();    
  return res;
}

module.exports = {setField, searchText};