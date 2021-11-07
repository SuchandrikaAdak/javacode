let cont=document.querySelector('.no');
cont=document.querySelector('.container');
// console.log(cont.childNodes);//shows.childnodes include text comments we are not inteerested in
console.log(cont.children);//only important things

let nodeName=cont.childNodes[1].nodeName; //gives nodename of first elemnt of const child
let nodeType=cont.childNodes[0].nodeType;
//for nodetypes
// 1-Element
// 2-attribute
// 3-text name
// 8-cmment
// 9-document
// 10-doctype
// console.log(nodeName);
// console.log(nodeType);



let contaa=document.querySelector('div.container');
console.log(contaa.children[1].children[0].children);//like a heierchy almost


console.log(contaa.firstChild);//getting just the first child
console.log(contaa.firstElementChild);//first eleemnt child
console.log(contaa.lastChild);
console.log(contaa.lastElementChild);//it is form last elemt child

console.log(contaa.childElementCount);//count of child eleemnts

//to get siblingg
console.log(contaa.firstElementChild.parentNode);
console.log(contaa.firstElementChild.nextSibling);//can get commnt text  anything
console.log(contaa.firstElementChild.nextElementSibling); //can get the eleemnt sibling


