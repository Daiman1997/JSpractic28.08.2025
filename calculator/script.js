const scoreboard = document.getElementById('scoreboard'); // Экран
const buttonErase = document.getElementById('buttonErase'); // Стереть всё
const buttonClear = document.getElementById('buttonClear'); // Стереть один знак
const buttonEqual = document.getElementById('buttonEqual'); // Равно
const buttons = document.querySelectorAll('.calculatorButton'); // Все кнопки


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'buttonMultiply') {
            scoreboard.textContent += '*'
        } else if (button.id === 'buttonPercent') {
            scoreboard.textContent = eval(scoreboard.textContent / 100)
        } else {
            scoreboard.textContent += button.textContent.trim()
        }
        
    })
})

buttonEqual.addEventListener('click', () => {
    try {
        scoreboard.textContent = eval(scoreboard.textContent)
    } catch (error) {
        scoreboard.textContent = 'Ошибка'
    }
})

buttonClear.addEventListener('click', () => {
    scoreboard.textContent = scoreboard.textContent.slice(0, -1)
})

buttonErase.addEventListener('click', () => {
    scoreboard.textContent = ''
})