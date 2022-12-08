const startBtn = document.querySelector('#start')
const reserBtn = document.querySelector('#reset-btn')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['red', 'Lime', 'DeepPink', 'DeepPink', 'gray', 'yellow', 'Blue', 'Magenta', 'Silver', 'Beige', 'LightPink', 'Salmon']
let time = 11
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()//для того чтобы в ссылке на страницу не было перенаправления на новую(иначе появится #(в данном случает), что будет означать, что мы перешли на новую страницу)
    screens[0].classList.add('up')//прокрутка экранов при нажатии кнопки startBtn
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()      
    }
})

/*reserBtn.addEventListener('click', (event) => {
    event.preventDefault()

    reserBtn.style.display = 'none'
})*/

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCyrcle()
    }
})

function startGame () {
    setInterval(decreaseTime, 1000)
    createRandomCyrcle ()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = -- time
        if (current < 10) {
        current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame () {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1> Cчёт: ${score}</h1>`
    reserBtn.style.display = 'block'
}

function createRandomCyrcle () {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width,height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    const color = gerRandomColor ()
    circle.style.backgroundColor = color
    
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function gerRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
    }














