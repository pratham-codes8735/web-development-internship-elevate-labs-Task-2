let tasks = [];


function displayTasks() {
    const list = document.getElementById("task-list");
    list.innerHTML = "";

    tasks.forEach((task, i) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.text;

        // Show completed status
        if (task.completed) {
            span.classList.add("completed");
        }

        // Toggle completed status when clicked
        span.addEventListener("click", () => {
            tasks[i].completed = !tasks[i].completed;
            saveTasks();
            displayTasks();
        });

        const btn = document.createElement("button");
        btn.textContent = "×";
        btn.setAttribute("aria-label", "Delete " + task.text);

        btn.addEventListener("click", () => removeTask(i));

        li.append(span, btn);
        list.appendChild(li);
    });
}


function addTask(){
     const taskInput = document.getElementById("task-input");
     const text = taskInput.value;
     if (text === ""){
        return;
     }

     tasks.push({
      text: text,
      completed:false
     });
     taskInput.value="";
     saveTasks();
     displayTasks();
}

function removeTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  displayTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    try {
        const saved = localStorage.getItem("tasks");

        if (saved !== null) {
            const parsed = JSON.parse(saved);

            tasks = Array.isArray(parsed)
                ? parsed.map(task => {
                    // Support tasks saved by your old version
                    if (typeof task === "string") {
                        return {
                            text: task,
                            completed: false
                        };
                    }

                    return {
                        text: task.text,
                        completed: Boolean(task.completed)
                    };
                })
                : [];
        }
    } catch (error) {
        tasks = [];
    }
}



document.querySelector(".input-area").addEventListener("submit", function(event) {
        event.preventDefault();
        addTask();
    });



loadTasks();
displayTasks();    