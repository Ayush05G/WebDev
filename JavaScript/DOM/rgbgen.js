let btn=document.querySelector('button');
btn.addEventListener('click', function(){
    let h3=document.querySelector('h3');
    let color=generateRandomColor();
    h3.innerText=color;
    let div=document.querySelector('div');
    div.style.backgroundColor=color;
    console.log("color updated");
});

function generateRandomColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}