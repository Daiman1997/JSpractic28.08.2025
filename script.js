const circle = document.querySelectorAll('#circle')
let color;
function randomColor() {
  circle.forEach(circle => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    color = `rgb(${red}, ${green}, ${blue})`
    circle.style.backgroundColor = color;
  })
}

setInterval(randomColor, 1000)