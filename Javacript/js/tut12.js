
// let a=document;
// a=document.all; //gives all about all doc
// a=document.body;//gives all about body
// a=document.forms[0];//gives formno 1

// Array.from(a).forEach(function(element) //makes it to array of all elemt
// {
//     console.log(element);//print it
// })

// a=document.links[0];give the line and adding .href gives the link 
let a=document.images;
Array.from(a).forEach(function(element){
console.log(element);
});
let b=document.script;
Array.from(b).forEach(function(element){
console.log(element);
})
console.log(a);