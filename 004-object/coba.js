const apples = { name: "Appless" }; 
const bananas = { name: "Bananas" }; 
const oranges = { name: "Oranges" }; 

// create a map
const fruits = new Map(); 
// MAP doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map?retiredLocale=id 

// add new element to the map
fruits.set(apples, 500); 
fruits.set(bananas, 300); 
fruits.set(oranges, 200); 

console.log(fruits);