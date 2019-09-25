import item from './item.js';

const items = [];
const hideCheckedItems = false;

const findById = function (id) {
  let target = this.items.find(thisItem => {
    return thisItem.id === id;
  });
  return target;
};

const addItem = function (name) {
  try {
    item.validateName(name);
    let result = item.create(name);
    this.items.push(result);
  } catch (e) {
    console.log(`Cannot add item: ${e.message}`);
  }
};

const findAndToggleChecked = function (id) {
  let bool = this.findById(id).checked;
  bool = !bool;
};

const findAndUpdateName = function (id, newName) {
  try {
    item.validateName(findById(id).name);
    item.name = newName;
  } catch (e) {
    console.log(`Cannot update name: ${e.message}`);
  }
};

const findAndDelete = function (id) {
  this.items = this.items.filter(item => item.id !== id);

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