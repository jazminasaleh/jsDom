const btn = document.querySelector("[data-from-btn]");

const createTask = (evento) =>{
    //*lo que hace es cancelar el evento
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = " ";
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    const content = `
            <span class="task">${value}</span>
        <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.appendChild(taskContent);
    list.appendChild(task);
}


btn.addEventListener("click", createTask);

const checkComplete = () =>{
    const i = document.createElement('i');
    i.classList.add("far", "fa-check-square", "icon")
    return i
}

const completeTask = () => {
    
}