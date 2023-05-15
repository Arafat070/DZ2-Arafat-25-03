const smallBlock = document.querySelector('.block');
let rotation = 0;
let radius = 200;
const speed = 100;

function moveBlock() {
    rotation += 0.1;
    const top = radius * Math.sin(rotation) + 225;
    const left = radius * Math.cos(rotation) + 225;
    smallBlock.style.top = `${top}px`;
    smallBlock.style.left = `${left}px`;

    setTimeout(moveBlock, speed);
}

moveBlock();

const watch = document.querySelector('#watch')
let timer
let milliseconds = 0
const starWatch = () => {
    watch.classList.remove('paused')
    clearInterval(timer)
    timer = setInterval(() => {
        milliseconds += 10
        let dateTimer = new Date(milliseconds)
        watch.innerHTML =
        ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1)

    },10)
}

const pausedWatch = () => {
    watch.classList.add('paused')
    clearInterval(timer)
}

const clearWatch = () => {
    watch.classList.remove('paused')
    clearInterval(timer)
    milliseconds = 0
    watch.innerHTML = '00:00:00:00'
}

function resume() {
    starWatch()
}


document.addEventListener('click', (e) => {
    const element = e.target
    if (element.id === 'start') starWatch()
    if (element.id === 'stop') pausedWatch()
    if (element.id === 'clear') clearWatch()
    if (element.id === 'resume') resume()
})
