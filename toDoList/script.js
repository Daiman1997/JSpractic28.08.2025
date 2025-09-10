const inputElement = document.querySelector('.main__input'); // Поле ввода задачи
const addButton = document.querySelector('.main__button'); // Кнопка добавления задачи
const listElement = document.querySelector('.main__list'); // Список задач
const clearButton = document.querySelector('.clear');  // Кнопка очистки списка


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks()
// tasks.forEach((_, index) => console.log(index))

// Обработчик клика по кнопке "Добавить"
addButton.onclick = function () {
    if (!inputElement.value) {
        alert('Введите задачу')
    } else {
        const newNote = { text: inputElement.value, complete: false }
        tasks.push(newNote)
        inputElement.value = ''
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderTasks()
    }
}
// Функция для отображения задач в списке
function renderTasks() {
    listElement.innerHTML = tasks.map((task, index) => `
        <li class="main__list-item">
            <span class="item__text ${task.complete ? 'item__complete' : ''}" >${task.text}</span>
            <div class="item__buttons">
                <button class="button__complete ${task.complete ? 'complete__true' : ''}"><img class="item__svg" data-index="${index}" data-complete="${task.complete}" src="/toDoList/image/complete.svg" alt="complete"></button>
                <button class="button__edit"><img class="item__svg" data-index="${index}" data-type="edit" src="/toDoList/image/edit.svg" alt="edit"></button>
                <button class="button__delete"><img class="item__svg" data-index="${index}" data-type="delete" src="/toDoList/image/delete.svg" alt="delete"></button>
            </div>
        </li>`)
}


// Делегирование событий для кнопок внутри списка задач
listElement.onclick = function (event) {
    console.log(event.target.dataset)
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type === 'delete') {
            tasks.splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            renderTasks()
        } else if (type === 'edit') {
            const listItem = event.target.closest('.main__list-item')
            listItem.innerHTML = `
                <input type="text" class="edit__input" value="${tasks[index].text}">
                <button class="edit__save" data-index="${index}">Сохранить</button>
            `
            const editSave = listItem.querySelector('.edit__save')
            editSave.onclick = function () {
                const editInput = listItem.querySelector('.edit__input')
                const newTask = editInput.value
                if (newTask !== null && newTask.trim() !== '') {
                    tasks[index].text = newTask.trim()
                    localStorage.setItem('tasks', JSON.stringify(tasks))
                    renderTasks()
                } else {
                    alert('Задача не может быть пустой')
                }
            }
        } else if (event.target.dataset.complete) {
            tasks[index].complete = !tasks[index].complete
            localStorage.setItem('tasks', JSON.stringify(tasks))
            renderTasks()
        }
    }
}

// Очистка всего списка задач
clearButton.onclick = function () {
    localStorage.clear()
    tasks = []
    listElement.innerHTML = ''
}