console.log('this is tut7');
let marks=[34,23,34,91,73,25];
const fruit=['orange','apple','pineapple'];
const mixed=['str',39,[3,5]];

const arr=new Array(32,123,21,'orange');
console.log(arr);
console.log(fruit[0]);
console.log(mixed);

console.log(arr.length);
console.log(Array.isArray(arr)); //return true or false whether that array is present or not

arr[0]='haarry';  //chnage arr[0] to harry
//let arrel=arr[0];
//prints haaryy
console.log(arr);

let value=marks.indexOf(34);// gives position of elemnt
console.log(value);  

//mutating or modifying
marks.push(34);// adds elemnt to end
console.log(marks);

marks.unshift(1009);// add elemnts to beginning
console.log(marks);

marks.shift();
console.log(marks);//removes from beginning


marks.pop();//deletes right most elemnt
console.log(marks);


marks.splice(1,3); //from 1 ---3 elemts removed
console.log(marks);

marks.reverse(); //reverses
console.log(marks);

let marks2=[1,2,3,4];
marks=marks.concat(marks2);
console.log(marks);


let myobj={
    name:'harry',
    channel:'code with hary',
    isactive:'true',
    marks:[1,2,3,4]
}
console.log(myobj);
console.log(myobj.isactive);//getting acces to particular things

console.log(myobj['channel']);//another way to get same



