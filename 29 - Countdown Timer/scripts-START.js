let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

buttons.forEach(button => button.addEventListener('click', startTimer))

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value
    console.log(mins)
    timer(mins*60)
    this.reset()
})


function timer(seconds){
    // clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds*1000;
    displayTimeLeft(seconds)
    displayEndTime(then)

    countdown = setInterval(() =>{
        const secondsLeft = Math.round((then - Date.now())/1000);

        // check if we should stop it
        if ( secondsLeft < 0){
            clearInterval(countdown)
            return
        }

        // display it
        displayTimeLeft(secondsLeft)

    }, 1000)

}

function twoDigitsTime(number){
    
    return `${number < 10 ? '0' : ''}${Math.abs(number)}`
}

function displayTimeLeft(seconds){
    const minutes = twoDigitsTime(Math.floor(seconds/60));
    const remainderSeconds = twoDigitsTime(seconds % 60);
    const display = `${minutes}:${remainderSeconds}`
    console.log(display)
    timerDisplay.textContent = display;
    
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    let hour = end.getHours();
    hour = twoDigitsTime(hour > 12 ? hour - 12 : hour);
    const minutes = twoDigitsTime(end.getMinutes());
    endTime.textContent = `Be back at ${hour}:${minutes}`

}

function startTimer(){
   timer(parseInt(this.dataset.time))
}

