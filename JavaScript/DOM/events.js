let btn=document.querySelector('button');
console.dir(btn);
// btn.onclick=function(){
//     console.log('Button Clicked');
// }
function sayhello(){
    alert('Hello');
}
function saybye(){
    alert('Bye');
}
// btn.onclick=sayhello;
// btn.onclick=saybye;
btn.addEventListener('click',sayhello);
btn.addEventListener('dblclick',saybye);
btn.onmouseenter=function(){
    console.log('Mouse Enter');
}