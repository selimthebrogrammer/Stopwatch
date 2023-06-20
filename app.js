const start = document.querySelector('.start-btn')
const stop = document.querySelector('.stop-btn')
const reset = document.querySelector('.reset-btn')
const timer = document.querySelector('.timer')

let interval;
let time = 0;

function stopWatch() {
         interval = setInterval(() => {
                  time++;
                  updateTimer()

         }, 1000)
}

function updateTimer() {
         let hour = Math.floor(time / 3600)
         let minute = Math.floor(time / 60)
         let second = Math.floor(time % 60)

         timer.innerHTML = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`

}

function stopCount() {
         clearInterval(interval)

}

function resetCount() {
         clearInterval(interval)
         time = 0;
         updateTimer()
}

start.addEventListener('click', stopWatch)

stop.addEventListener('click', stopCount)

reset.addEventListener('click', resetCount)
