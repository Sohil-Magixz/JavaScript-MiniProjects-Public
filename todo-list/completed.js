document.addEventListener("DOMContentLoaded", function () {
    let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
    let box = document.getElementById("box");
    box.classList.remove("items-center");

    // Check if there are any completed tasks
    if (completedTasks.length > 0) {
        completedTasks.forEach((task, index) => {
            let newdiv = document.createElement("div");
            newdiv.classList.add(
                "bg-gray-400", "p-4", "rounded", "shadow-md", "mb-4", 
                "w-full", "overflow-auto", "min-h-[180px]", "line-through"
            );
            newdiv.innerHTML = `
            <h3 class="text-[32px] underline">${task.title}</h3>
            <p>${task.description}</p>
            <p>Notes: ${task.notes}</p>
            <p>Due: ${task.due}</p>
            <p>Priority: ${task.priority}</p>
            <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            `;

            box.appendChild(newdiv);

            // Delete button functionality
            newdiv.querySelector(".delete-btn").addEventListener("click", () => {
                newdiv.remove();
                completedTasks.splice(index, 1);
                localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
                // Refresh the page after deletion to prevent incorrect index reference in splice
                location.reload();
            });
        });
    } else {
        let header = document.getElementById("add-task-header");
        header.classList.remove("hidden");
    }

    // Toggle mobile navigation
    let nav_bar = document.getElementById("nav_bar");
    let nav_menu = document.getElementById("nav_menu");

    nav_bar.addEventListener("click", () => {
        nav_menu.classList.toggle("hidden");
    });
});
