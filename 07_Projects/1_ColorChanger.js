let color1 = document.getElementById('grey')
let color2 = document.getElementById('white')
let color3 = document.getElementById('blue')
let color4 = document.getElementById('yellow')

color1.addEventListener('click', () => {
    document.body.style.backgroundColor = 'grey'
})

color2.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
})

color3.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue'
})

color4.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow'
})
