// Сохранение и загрузка задач в localStorage.

export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasks() {
    const savedText = localStorage.getItem("tasks");

    if (savedText === null) {
        return [];
    }

    try {
        const parsed = JSON.parse(savedText);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error("Ошибка загрузки задач", error);
        return [];
    }
}
