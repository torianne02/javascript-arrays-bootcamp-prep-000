var chocolateBars = [
  "snickers", 
  "hundred grand", 
  "kitkat", 
  "skittles"
  ];
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    return array.unshift(element);
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
    return array.push(element);
  }