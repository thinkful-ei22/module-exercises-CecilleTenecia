'use strict';
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  //Adding the provided code per the exercise

  // const itemNames = [ '', 'apples', 'pears' ];
  // itemNames.forEach(name => {
  //   try {
  //     Item.validateName(name);
  //     store.items.push(Item.create(name));
  //   } catch(error) {
  //     console.log('Cannot add item: ' + error.message);
  //   }
  // });
  // shoppingList.render();

});

console.log(store);
//console.log(foo);
