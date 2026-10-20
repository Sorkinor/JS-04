// Здесь находятся функции для работы с задачами.

export function isValidTitle(title) {
    return typeof title === "string" && title.trim().length >= 3;
}

export function addTask(tasks, title) {
    const task = {
        id: Date.now(),
        title: title.trim()
    };

    tasks.push(task);
    return tasks;
}

export function removeTask(tasks, id) {
    return tasks.filter(task => task.id !== id);
}
