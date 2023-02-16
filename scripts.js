
window.addEventListener('load', function () {

    const colorInBack = document.getElementById("shuttleBackground");
    const paragraph = document.getElementById("flightStatus");
    const height = document.getElementById('spaceShuttleHeight');
    const button = document.getElementById('takeoff')

    button.addEventListener('click', function () {
    let response = window.confirm('Please confirm the shuttle is ready to launch')
    if (response) {
        paragraph.innerHTML = 'Shuttle is in Flight'
        colorInBack.style.backgroundColor = 'blue'
        height.innerHTML = 10000
    }
})

})
