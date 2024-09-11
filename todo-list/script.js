document.addEventListener("DOMContentLoaded", function () {
    let add_button = document.getElementById("add_button");
    let add_task = document.getElementById("myform");
    let add_header = document.getElementById("add-task-header");
    let close_form = document.getElementById("form_close");

    let nav_bar = document.getElementById("nav_bar");
    let nav_menu = document.getElementById("nav_menu");

    let count = 0;

    // Load tasks from local storage on page load
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => displayTask(task));

    nav_bar.addEventListener("click", () => {
        nav_menu.classList.toggle("hidden");
    });

    // Toggle task form visibility
    add_button.addEventListener("click", () => {
        add_task.classList.toggle("hidden");
        nav_menu.classList.add("hidden");
    });

    // Close form button
    close_form.addEventListener("click", () => {
        add_task.classList.toggle("hidden");
    });

    // Handle form submission
    add_task.addEventListener("submit", (e) => {
        e.preventDefault();

        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        let due_date = document.getElementById("due").value;
        let notes = document.getElementById("notes").value;
        let priority = document.getElementById("priority").value;

        let task = {
            title: title,
            description: description,
            due: due_date,
            notes: notes,
            priority: priority,
            completed: false
        };

        // Add task to local storage
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Display the new task
        displayTask(task);

        add_task.classList.add("hidden");
        add_task.reset();
    });

    function displayTask(task) {
        let newdiv = document.createElement("div");
        newdiv.classList.add(
            "bg-green-400", "p-4", "rounded", "shadow-md", "mb-4", 
            "w-full", "overflow-auto", "min-h-[180px]"
        );
        newdiv.innerHTML = `
            <h3 class="text-[32px] underline">${task.title}</h3>
            <p>${task.description}</p>
            <p>Notes: ${task.notes}</p>
            <p>Due: ${task.due}</p>
            <p>Priority: ${task.priority}</p>
            <div class="flex space-x-2 mt-4">
                <button class="edit-btn bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                <button class="complete-btn bg-green-500 text-white px-2 py-1 rounded">Complete</button>
                <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
        `;

        if (task.completed) {
            newdiv.classList.remove("bg-green-400");
            newdiv.classList.add("bg-gray-400", "line-through");
        }

        document.getElementById("box").appendChild(newdiv);
        document.getElementById("box").classList.remove("justify-center");

        // Edit button functionality
        newdiv.querySelector(".edit-btn").addEventListener("click", () => {
            document.getElementById("title").value = task.title;
            document.getElementById("description").value = task.description;
            document.getElementById("due").value = task.due;
            document.getElementById("notes").value = task.notes;
            document.getElementById("priority").value = task.priority;

            add_task.classList.remove("hidden");

            // Remove the current task div when editing
            newdiv.remove();
            tasks = tasks.filter(t => t !== task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });
        newdiv.querySelector(".complete-btn").addEventListener("click", () => {
            newdiv.classList.remove("bg-green-400");
            newdiv.classList.add("bg-gray-400", "line-through");
            task.completed = true;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
            completedTasks.push(task);
            localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
        });
        newdiv.querySelector(".delete-btn").addEventListener("click", () => {
            newdiv.remove();
            tasks = tasks.filter(t => t !== task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });
    }
});