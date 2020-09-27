const startingSeconds = 4;     //Sets a non reassignable variable of the starting seconds
let time = startingSeconds;     //Sets time equal to starting seconds
const updateCountMax = 4;       //Sets updatecountmax to 4, which is used to update the countdown 4 times a second later on.
let updateCount = 0;
let timerFinished = false;

let workoutNum = 0;
let imageNum = 0;

const workout = [
    {'time': 45, 'name': '1/14 Push-ups', 'image': "../Logos/Push-ups.gif"},
    {'time': 10, 'name': '2/14 Rest', 'image': "../Logos/pause.png"},
    {'time': 45, 'name': '2/14 Sit-ups', 'image': "../Logos/Sit-ups.gif"},
    {'time': 10, 'name': '3/14 Rest'},
    {'time': 45, 'name': '3/14 Plank'},
    {'time': 10, 'name': '4/14 Rest'},
    {'time': 45, 'name': '4/14 left-Side plank'},
    {'time': 10, 'name': '5/14 Rest'},
    {'time': 45, 'name': '5/14 right-Side plank'},
    {'time': 10, 'name': '6/14 Rest'},
    
    
]

const countdownEl = document.getElementById('countdown');
const exerciseNameEl = document.getElementById('exerciseName');

let myVar = setInterval(tick, (1000/updateCountMax));
let paused= true;

function tick() {
    if (timerFinished){
        resetTimer()
    }
    updateCountdown()

}

function updateCountdown() {                                //This happens every 1/4 of a second if it is not paused.
    if (!paused && updateCount >= updateCountMax && !timerFinished){
        const minutes = Math.floor(time / (60));
        let seconds = time % 60;

        seconds = seconds < 10 ? `0` + seconds : seconds;

        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;

        updateCount=0;

        if(minutes <= 0 && seconds <= 0){
            timerFinished = true;
            workoutNum++;
            imageNum++;
            paused = true;
            return
        }
        
    };
    updateCount++;
}
function reset() {
    time = startingMinutes * 60;    
    updateCountdown();
}
function pause() {
    paused = !paused;
}

function start() {
    timerFinished = true;
    paused = false;
}

function resetTimer(){
    if(workoutNum == workout.length){
        return
    }
    time = workout[workoutNum]['time']
    exerciseNameEl.innerHTML = `${workout[workoutNum]['name']}`;
    myImage.src = workout[imageNum]['image'];
    timerFinished = false;
}