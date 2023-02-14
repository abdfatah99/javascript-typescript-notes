// src: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map 
// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.

const Mahasiswa = new Map();

Mahasiswa.set("nama", "Abdul Fatah"); 
Mahasiswa.set("nim", 1803015235); 
Mahasiswa.set("Fakultas", "Teknik Informatika"); 

// get the name value
const getName = Mahasiswa.get("nama");
console.log(getName, typeof(getName));

// set new key:value pair
const setNewName = Mahasiswa.set("nama", "Abdul Hamid");
console.log(Mahasiswa)

// set new multiple key:value
const hamid = Mahasiswa.set("nim", "1803015234")
                       .set("Fakultas", "teknik elektro");

console.log(Mahasiswa);


