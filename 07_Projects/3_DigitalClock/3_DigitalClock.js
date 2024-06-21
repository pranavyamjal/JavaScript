const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function()
{
    let data = new Date();
    // console.log(date.toLocaleTimeString)
    clock.innerHTML = data.toLocaleTimeString();
}, 1000);
