document.getElementById('heading').addEventListener('click',function(e)
{
    console.log('you have clicked the heaidng'); //if you click on it then console pe ayega ye
    let vari=e.target;//stands for the clickable elemnt
    vari=e.target.className;
    vari=Array.from(e.target.classList);
    vari=e.target.id;
    vari=e.offsetX; //value in x axis
    vari=e.offsetY; //value of y axis as you it is fired


    vari=e.clientX; //browser window ke hisab se

    console.log(vari); //e stands for event object
    // location.href='//codewithharrry.com';//takes you to this page on click
})


