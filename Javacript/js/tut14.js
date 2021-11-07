/*
eleemnt selectors
1:single elemnt selector
2:multiple elemnt selector

*/
let element=document.getElementById('myfirst');
// element=element.className;
// element=element.childNodes;//gives the child node
// element=element.parentNode; //gives parent
 element.style.color='red'; //changing css using js
element.innerHTML='<b> Harry is good</b>';//changingit to bold
element.innerText="harry kuch vi??";
console.log(element);


let sel=document.querySelector('myfirst');//prints myfirst class
sel=document.querySelector('div'); ///gets only first eleemt

sel.style.color='green';//colors only first dive
console.log(sel);


//multiple elemt selector
let elms=document.getElementsByClassName('container');//all elemts in class container
// console.log(elms[0].getElementsByClassName('child')); //all elemts by of class container a thne of child

elms=document.getElementsByTagName('div');
console.log(elms);

Array.from(elms).forEach(function(element)
    {
        console.log(element);
        element.style.color='blue';
    })
