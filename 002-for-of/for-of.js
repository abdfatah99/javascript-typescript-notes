// previously, the variable is named 'name'. and this error is occured
// This is the answers. 
// Dangerous "name" (and potentially others) global #18433
// src: https://github.com/microsoft/TypeScript/issues/18433

let nama = ['a', 'b', 'c']; 

for (const element of nama){
    console.log(element); 
}

/* 
    for (variable of iterable) {
         statement
    }

    src -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
*/