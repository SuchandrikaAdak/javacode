//creata a variable 
//create a variable a string containing the tesxt which is a link  you are interested in

//fetch all the links from a given page  which contains this text

let s = "harry";
let b = document.links;
let href;
Array.from(b).forEach(function (element) {
    href = element.href;
    if (href.includes(s)) {
        console.log(element.href);
    }


})
