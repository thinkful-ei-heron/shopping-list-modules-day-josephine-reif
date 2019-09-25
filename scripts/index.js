// import item from './item.js';
import store from './store.js';
import shoppingList from './shopping-list.js';

const main = function () {
  //  Testing valiedateName() and create()
  // const itemNames = ['', 'apples', 'pears'];
  // itemNames.forEach(name => {
  //   try {
  //     item.validateName(name);
  //     store.items.push(item.create(name));
  //   } catch (error) {
  //     console.log(`Cannot add item: ${error.message}`);
  //   }
  // })


  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);

store.addItem('bananas');
store.addItem('apples');
store.addItem('rice');
// grab the id of the first store item (bananas)
let id = store.items[0].id;
// delete this item from the store
console.log(id);
console.log(store.items);
store.findAndDelete(id);
console.log(store.items);
shoppingList.render();