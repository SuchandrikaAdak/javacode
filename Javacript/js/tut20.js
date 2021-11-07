console.log("this is tut20");

let imparr=['adrak','pyaz','lahsun'];

//cannot add arrays so to add array follow here 
//adds a key value pair inside local storage

localStorage.setItem('name','harry');
localStorage.setItem('name2','suchi');
localStorage.setItem('sabzi',JSON.stringify(imparr));//takes object converts to string.to store the array in sabzi
// localStorage.clear(); //clears the entire local storage

//clearing particular key-value pa0ir
localStorage.removeItem('name2');

//in applicatuon setting the object
let name=localStorage.getItem('name');//in here getting it

console.log(name);



//now to access the array from local storage
name=JSON.parse(localStorage.getItem('sabzi'));//takes object converts to string
console.log(name);

//session storage ends when session ends
sessionStorage.setItem('gggname','sharry');
sessionStorage.setItem('njjname2','ssuchi');
sessionStorage.setItem('nnjsabzi',JSON.stringify(imparr));

// to clear sessionstorag
sessionStorage.clear;



