localStorage.setItem("nama", "fatah");
localStorage.setItem("nama", "ria_localstorage"); 

//console.log(localStorage.getItem("nama"));
localStorage.removeItem("nama"); 

///////////////////////////////////////////////////////////////////
sessionStorage.setItem("nama", "fatah"); 
sessionStorage.setItem("pacar", "ria_session"); 

let pacar = sessionStorage.getItem("pacar"); 
console.log(pacar); 
sessionStorage.removeItem("nama"); 

////////////////////////////////////////////////////////////////////
document.cookie = 'nama=fatah cookie'; 
let ria = document.cookie = 'nama2=ria; expires=' + new Date(2022, 4, 1).toUTCString()
console.log(ria); 


