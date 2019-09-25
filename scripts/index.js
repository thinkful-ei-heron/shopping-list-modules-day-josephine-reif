import item from './item.js';
import shoppingList from './shopping-list.js';
import store from './store.js';

const main = function () {
  const itemNames = ['', 'apples', 'pears'];
  itemNames.forEach(name => {
    try {
      item.validateName(name);
      store.items.push(item.create(name));
    } catch (error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  })
  //  Testing valiedateName() and create()

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);