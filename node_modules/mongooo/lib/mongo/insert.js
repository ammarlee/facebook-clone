const save = async (client, param = {}) => {  
  try {
    await client.insertOne(param);    
  } catch (error) {return false;}  
  return true;
}

const saveMany = async (client, param = new Array()) => {  
  try {
    await client.insertMany(param);    
  } catch (error) {return false;}  
  return true;
}

module.exports = {save, saveMany};