const taskInput=document.getElementById("task");//textfield
const addBtn=document.getElementById("add");//button id
const taskList=document.getElementById("tasklist");//ul list id

addBtn.addEventListener("click",()=>{
    const taskText=taskInput.value.trim();//need to review b33 assignment
    if(taskText!=" ")
        {
        createTask(taskText);
        taskInput.value="";
    }

});

function createTask(text)//need to review b33 assignment
{
    const taskItem=document.createElement("li");//
    taskItem.innerHTML=`<span>${text}</span> <button onclick="deleteitem(this)" class="delete">delete</buttom>`;
    taskList.appendChild(taskItem);
}

function deleteitem(button) 
{
    const taskItem = button.parentElement;
    taskItem.remove();
}
function cleartask()
{
    const clearbtn = document.getElementById("clearbtn");
    taskList.innerHTML="";
}




