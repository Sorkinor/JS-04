// Главный файл: запускает приложение и обрабатывает события.

import { isValidTitle, addTask, removeTask } from "./data.js";
import { saveTasks, loadTasks } from "./storage.js";
import { renderTasks } from "./render.js";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const errorMessage = document.querySelector("#error");
const emptyMessage = document.querySelector("#empty-message");

let tasks = loadTasks();

function updateTasks() {
    saveTasks(tasks);
    renderTasks(tasks, list, emptyMessage);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!isValidTitle(input.value)) {
        errorMessage.textContent = "Введите название задачи (минимум 3 символа)";
        return;
    }

    errorMessage.textContent = "";
    tasks = addTask(tasks, input.value);
    input.value = "";
    updateTasks();
});

list.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        const id = Number(event.target.dataset.id);
        tasks = removeTask(tasks, id);
        updateTasks();
    }
});

renderTasks(tasks, list, emptyMessage);
