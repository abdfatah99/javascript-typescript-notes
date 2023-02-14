// src: https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/

let dataCall = [
    {
        firstName: "fatah", 
        lastName: "abdul"
    }, 
    {
        firstName: "zainal", 
        lastName: "abidin"
    }
]

let userFullnames = user.map(function(element){
    return `${element.firstName} ${element.lastName}`;
})

//console.log(userFullnames); 

//let arr = [2, 3, 5, 7]; 

// looping
// cetak dari masing2 object

dataCall.map(function(element, index, array){
    if(index === 1){
        console.log(element);
    }
}); 

