const categoriesMock = require("../mockData/categories.json");

const Categories = require("../models/Categories");

module.exports = async () => {
  const categories = await Categories.find();

  if (categories.length !== categoriesMock.length) {
    await createInitialEntity(Categories, categoriesMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();

  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
