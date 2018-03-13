var chocolateBars = [
  "snickers", 
  "hundred grand", 
  "kitkat", 
  "skittles"
  ];
  
  function addElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array;
  }
  
  function destructiveAddElementToBeginningOfArray(array, element) {
    var newArray = array;
    newArray.unshift(element);
    return newArray;
  }
  
  function addElementToEndOfArray(array, element) {
    array.push(element);
    return array;
  }