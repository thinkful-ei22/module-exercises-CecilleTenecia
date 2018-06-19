'use strict';
const store = (function () {
  const foo = 'bar';
  return {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: '',
    findById: function(id) {
      return store.items.find(item => item.id === id);
    },
    addItem: function(itemName) {
      try {
        Item.validateName(itemName);
        Item.create(itemName);
        store.items.push({ id: cuid(), name: itemName, checked: false });
      }
      catch(err) {
        console.log('Cannot add item: {error.message}');
      }
    },
    findAndToggleChecked: function(id) {
      let foundItem = this.findById(id);
      foundItem.checked = !foundItem.checked;

    },
    findAndUpdateName: function(id, newName) {
      try {
        Item.validateName(newName);
        findById(id).name = newName;
      }
      catch(err) {
        console.log('Cannot update name: {error.message}')
      }
    },
    findAndDelete: function(id) {
      const index = this.items.findIndex(item => item.id === id);
      this.items.splice(index, 1);
    },
    toggleCheckedFilter: function() {
      this.hideCheckedItems = !this.hideCheckedItems;
    },
    setSearchTerm: function(newArg) {
      this.searchTerm = newArg;
    },
    return {
    items, hideCheckedItems, searchTerm, findById, addItem, findAndToggleChecked,
    findAndUpdateName, findAndDelete, toggleCheckedFilter, setSearchTerm
    };

  };

}() );
