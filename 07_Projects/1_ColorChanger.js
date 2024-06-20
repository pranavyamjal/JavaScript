// My code

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


// Below is the more efficent code

const buttons = document.querySelectorAll('button')
const body = document.querySelector('body')

buttons.forEach( function (button)
{
    console.log(button)
    button.addEventListener('click', function (e){
        console.log(e)
        console.log(e.target)

        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey'
        }

        if(e.target.id === 'white'){
            body.style.backgroundColor = 'white'
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        }

    })
})