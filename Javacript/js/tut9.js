//loops
for(let i=0;i<10;i++)
{
    console.log(i);
}
let j=0;
while(j<10)
{
    console.log(j);
    j++;
    break;
}
let k=11;
do
{
    console.log(k);
    k++;

}while(k<10)

let arr=[1,2,3,4]
arr.forEach(function(element)
{
    console.log(element);
})

let obj=
{
    name:'rohan das',
    age:78,
    type: "prohr=anhs"
}

//to print object key value pair

for(let key in obj)
{
    //printiing keys
    console.log(obj[key]);
}