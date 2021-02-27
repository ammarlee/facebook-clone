const del = async (client, param = {}) => {
  try {
    await client.deleteOne(param);
  } catch (error) {return false;}
  return true;
}

const delMany = async (client, param = {}) => {
  try {
    await client.deleteMany(param);
  } catch (error) {return false;}
  return true;
}

module.exports = {del,delMany};