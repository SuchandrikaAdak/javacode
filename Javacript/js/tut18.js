//let btn=document.getElementById('btn');
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// // btn.addEventListener('mousedown',func2);

// function func1(e)
// {
//     console.log("thanks",e);
//     e.preventDefault();//to prevent the submit 
// }
// function func2(e)
// {
//     console.log("thanks a doubble clik",e);
//     e.preventDefault();
// }
// function func3(e)
// {
//     console.log("thanks a mousedown",e);
//     e.preventDefault();
// }



// document.querySelector('.no').addEventListener('mouseenter',function()
// {
//     console.log('you exited no');
// })

//dynamically changing colors


document.querySelector('.container').addEventListener('mousemove',function(e)
{
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},154)`;
    console.log('you  mousemove');
})
