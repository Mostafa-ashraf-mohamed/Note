const addBtn = document.getElementById('addBtn');
let taskCard = document.getElementById('taskCard');
const h1Titel = document.getElementById('h1Titel');
const pTitel = document.getElementById('pTitel');
const divAlertNo =document.getElementById('alertNo');
const delAll =document.getElementById('delAll');
const darkMood =document.getElementById('darkMood');

/*dark mood*/
darkMood.addEventListener('click',()=>{
   document.body.classList.toggle('DarkMood');
    const nav= document.querySelector('section .header ul');
    nav.classList.toggle('bg-dark');
    nav.classList.toggle('bg-light');
    const navLi= document.querySelectorAll('section .header ul li button');
    navLi[0].classList.toggle('btn-outline-light');
    navLi[0].classList.toggle('btn-outline-dark');
    navLi[1].classList.toggle('btn-outline-light');
    navLi[1].classList.toggle('btn-outline-dark');
    navLi[2].classList.toggle('btn-outline-light');
    navLi[2].classList.toggle('btn-outline-dark');
    const modal= document.querySelector('.modal .modal-body button');
    modal.classList.toggle('btn-dark');
    modal.classList.toggle('btn-primary');
});
/*==============*/
/*delete all tasks*/
document.addEventListener("keyup",function (ev){
    if (ev.keyCode ==46){
        dellAllFun();
    }
});
let dellAllFun = ()=>{
    if(confirm("are you want to delete all your tasks")){
        taskCard.remove();
        document.getElementById('span').innerHTML+=('<div id="taskCard" class="col-12"></div>');
        taskCard = document.getElementById('taskCard');
        alertNo();
    }
}
delAll.addEventListener('click', dellAllFun);
/*================*/
/*alert function (no data)*/
let alertNo= ()=> {
        if (taskCard.children.length == 0) {
            divAlertNo.style.display = "block"
        } else {
            divAlertNo.style.display = "none"
        }
}
/*================*/
/*add new tasks*/
document.addEventListener("keyup",function (ev){
    if (ev.keyCode ==13){
        addtask();
    }
});
let addtask= ()=> {
    if(h1Titel.value.length!=0){
        taskCard.innerHTML += (`
   <div id="task" class=" alert alert-dark my-3"><span class="btn btn-outline-danger float-right delete" aria-hidden="true">&times;</span><div class=" col-11"><h5>${h1Titel.value}</h5><p class="Pfragments">${pTitel.value}</p></div></div>
     `)
        taskCard.animate({opacity: '0'}, 500, function(){
        });
        h1Titel.value='';
        pTitel.value='';
        alertNo();
    }else{
        alert("must enter data to add new task")
    }

}
addBtn.addEventListener('click',addtask);
/*================*/
/*delete one task*/
function cuteHide(el) {
    el.animate({opacity: '0'}, 500, function(){
    });
    setTimeout(() => { el.remove() }, 500);
}
let delTasks =(ev)=>{
    if (ev.target.classList.contains('delete')) {
        cuteHide(ev.target.parentElement);

    }
    alertNo();
}
document.addEventListener('click', delTasks)
/*================*/
/*complete task*/
let comTask =(e)=>{
    if (e.target.classList.contains('alert')) {
        e.target.classList.toggle('comTask')
    }
}
document.addEventListener('click', comTask)
/*============*/



