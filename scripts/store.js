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
  let target = this.findById(id);
  this.findById(id).checked = !target.checked;
};

const findAndUpdateName = function (id, newName) {
  try {

    let itemId = this.findById(id);
    itemId.name = newName;
    item.validateName(itemId.name);
  } catch (e) {
    console.log(`Cannot update name: ${e.message}`);
  }
};

const findAndDelete = function (id) {
  this.items = this.items.filter(item => item.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};