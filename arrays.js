var chocolateBars = [
  "snickers", 
  "hundred grand", 
  "kitkat", 
  "skittles"
  ];
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array;
  }
  
  function addElementToBeginningOfArray(array, element) {
    var newArray = array;
    newArray.unshift(element);
    return newArray;
  }
  
  function addElementToEndOfArray(array, element) {
    var newEndArray = array;
    newEndArray.push(element);
    return newEndArray;
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
  }