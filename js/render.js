// Отображение списка задач на странице.

export function renderTasks(tasks, list, emptyMessage) {
    list.innerHTML = "";

    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

    tasks.forEach(task => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");

        span.textContent = task.title;
        button.textContent = "Удалить";
        button.dataset.id = task.id;

        li.append(span, button);
        list.append(li);
    });
}
