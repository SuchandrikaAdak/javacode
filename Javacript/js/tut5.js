//type conversion and coeersion
console.log('welcome to tus');
let myvar;
myvar=String(34);
console.log(myvar,(typeof myvar));

let booleanVar=String(true);
console.log(myvar,(typeof booleanVar));

let i=false;
i=i.toString();
console.log(typeof i);

let stri=Number("3434");
console.log(stri,(typeof stri));

let st=Number(false);
console.log(st);
console.log(typeof st);

let num=parseInt('34');
console.log(typeof num);

let numb=parseFloat('34.098');
console.log(numb,typeof numb);

//type coercion
let mystr="698";
let mynum=34;//made to number
console.log(mystr+mynum);


