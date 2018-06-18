'use strict';

const validateName = function(name) {
  if (!name) {
    throw new TypeError('Name does not exist');
    console.log('Name does not exist');
  }
}

const create = function(name) {
  return {
    id: cuid(),
    name: name,
    checked: false
  }
}

const Item = (function () {
  const foo = 'bar';
  return {
    validateName,
    create,

  }
}() );


// console.log(Item);
// console.log(foo);


//id - invoke cuid() to create a unique id
// name - the value of parameter name
// checked - defaults to false
