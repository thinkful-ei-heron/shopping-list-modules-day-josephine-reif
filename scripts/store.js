import item from './item.js';

const items = [];
const hideCheckedItems = false;

const findById = function (id) {
  let target = items.find(item => {
    return item.id === id;
  });
  return target;
};

const addItem = function (name) {
  try {
    item.validateName(name);
    let result = item.create(name);
    items.push(result);
  } catch (e) {
    console.log(`Cannot add item: ${e.message}`);
  }
};

const findAndToggleChecked = function (id) {
  let bool = this.findById(id).checked;
  bool = !bool;
};

const findAndUpdateName = (id, newName) => {
  try {
    item.validateName(findById(id).name);
    item.name = newName;
  } catch (e) {
    console.log(`Cannot update name: ${e.message}`);
  }
};

const findAndDelete = (id) => {
  // console.log(findById(id));
  // console.log(items);
  console.log(this);
  let newItems = this.items.filter(item => {
    item.id !== id;
  });
  // console.log(newItems);
  return newItems;
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};