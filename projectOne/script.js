document.addEventListener('DOMContentLoaded', () => {
    const getInputText = document.getElementById('taskInput');
    const addTask = document.getElementById('addTask');
    const addTaskList = document.getElementById('addTaskList');

    let taskCollection = JSON.parse(localStorage.getItem('tasks')) || []; // Add All Tasks
    taskCollection.forEach(task => renderStorage(task));
    // Click Event on tasks
    addTask.addEventListener('click', () => {
        let text = getInputText.value.trim();
        if (text === "") return;
        // Object which gets the all the details.
        let taskObj = {
            id: Date.now(),
            task: text,
            status: false,
        }
        taskCollection.push(taskObj);
        getLocalstorage();
        renderStorage(taskObj)
        getInputText.value = "";
        console.log(taskCollection);   
    })

    function getLocalstorage() {
        localStorage.setItem('tasks', JSON.stringify(taskCollection))
    }

    function renderStorage(task) {
        console.log(task);
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        if (!task.id) li.classList.add("completed");
        li.innerHTML = `<span>${task.task}</span>
        <button>Delete</button>
        `
        addTaskList.appendChild(li);
        li.addEventListener('click', (e) => {
            if (e.target.tagName === "BUTTON") return;
            taskCollection.id = !task.id;
            li.classList.toggle("completed");
            getLocalstorage();

        })
        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();
            taskCollection = taskCollection.filter((t) => t.id !== task.id)
            li.remove();
            getLocalstorage();
        })
    }

});