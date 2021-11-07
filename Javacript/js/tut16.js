console.log('this is tut16');
let eleemnt=document.createElement('li');//creating new welemnt 
let text=document.createTextNode('i am a text node');//create new text
eleemnt.appendChild(text);

eleemnt.className='childul';//giving the new element class
eleemnt.id='createdli';//a nd id
eleemnt.setAttribute('title','mytitle');//also atribute

// eleemnt.innerHTML='<b>Hello this the fucking new bitch</b>';

//also can be done by this


console.log(eleemnt);


let ul=document.querySelector('ul.this');//sleecting this 
console.log(ul) ;
ul.appendChild(eleemnt);//appending the child

//removing elemnt

let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode=document.createTextNode('this is created node for elem2');
elem2.appendChild(tnode);

eleemnt.replaceWith(elem2);//replacig elemnt with elem2

//replcae
let myul=document.getElementById('myul');
myul.replaceChild(eleemnt,document.getElementById('fui'));

// delete child of elemnt
myul.removeChild(document.getElementById('lui'));

let pr=elem2.hasAttribute('class');//return whthere it has theattribute or not
elem2.removeAttribute('id'); //add attribute
elem2.setAttribute('title','myelemnt'); //remove attribute
console.log(elem2,pr);




//creat an elemnt=with text AS'' go to cod we to harry"
//and vcreate an tag outsid it with href-="cwh.com"

let n=document.createElement('h1');
let te=document.createTextNode("code with harry");
n.appendChild(te);
ul.appendChild(n);
n.setAttribute('href',"hhhhhh");











