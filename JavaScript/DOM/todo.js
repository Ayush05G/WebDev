let btn= document.querySelector('button');
let ul= document.querySelector('ul');
let input= document.querySelector('input');

btn.addEventListener('click', function(){
    let item= document.createElement('li');
    item.innerText= input.value;
    let delbtn= document.createElement('button');
    delbtn.innerText= 'delete';
    delbtn.classList.add('delete');
    item.appendChild(delbtn);
    ul.appendChild(item);
   console.log(input.value);
});

ul.addEventListener('click', function(e){
    if(e.target.tagName=='BUTTON'){
        e.target.parentElement.remove();
    }
}
);

// let delbtns= document.querySelectorAll('.delete');
// for(delbtn of delbtns){
//     delbtn.addEventListener('click', function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }