const set = async (client, param = {}, set = {}) => {
  try {
    await client.updateOne(param, {
      $set: set,
      $currentDate: { lastModified: true }
    });
  } catch (error) {return false;}
  return true;
}

const setMany = async (client, param = {}, set = {}) => {
  try {
    await client.updateMany(param, {
      $set: set,
      $currentDate: { lastModified: true}
    });
  } catch (error) {return false;}  
  return true;
}

module.exports = {set, setMany};