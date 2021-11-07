const age=45;
const  doesdirve=false;
if(age==19) //(age!=10) not equals to
{
    console.log('age is 19');
}
else if(age==65) // (age==='65') checks data type as well   //(age!==65) dtaa type as well as value not valued
{
    System.out.println('age is 65');
}
else{
    console.log('age is not 19');
}

//to check whther it exists or not
if(typeof vari!=='undefined')
{
    console.log('vari undef');
}
else{
    console.log('def');
}

if(doesdirve && age>18)
{
    console.log('u can');
}
else{
    console.log('you cannot drive');
}


//turnary ops

console.log(age==45? 'age is 45':'age is not' );

switch(age)
{
    case 18:
        console.log('u are 18');
        break;
    case 28:
        console.log('u are 28');
        break;
    default:
        console.log('you are adult');
        break;

}


