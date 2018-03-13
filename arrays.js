var chocolateBars = [
  "snickers", 
  "hundred grand", 
  "kitkat", 
  "skittles"
  ];
  
  function addElementToBeginningOfArray(array, element) {
    array.push(element);
    return array;
  }
  
  function destructiveAddElementToBeginningOfArray(array, element) {
    var newArray = array;
    newArray.push(element);
    return newArray;
  }