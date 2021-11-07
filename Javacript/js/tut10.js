//functions and scope
const mygreet=function(name,thank='thank') //thank= basically default val
{
    console.log(`${name}  wishesss ${thank}`);
    return 4;

}

let name='skillf';
let name2='rohan';
let val=mygreet(name,'Thanks a lot');
console.log(val);

const myobj={
    name:'upu',
    game:function()
    {
        return "GamepadButton";
    }
}
console.log(myobj.game());

arr=['fruit','hhh','djhjf'];
arr.forEach(function(element,index,array){
    console.log(element,index);    
});

let i=788;
console.log(i);
function ui(namee)
{
    let i=9
    console.log(i);
    return `tjis sn ${namee}`;
}
console.log(ui("harry"),i);



