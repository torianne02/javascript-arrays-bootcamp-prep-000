var chocolateBars = [
  "snickers", 
  "hundred grand", 
  "kitkat", 
  "skittles"
  ];
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
  }
  
  function addElementToBeginningOfArray(array, element) {
    [element, ...array];
  }
  
  function addElementToEndOfArray(array, element) {
    [...array, element];
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
  }