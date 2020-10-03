const startingSeconds = 4;     //Sets a non reassignable variable of the starting seconds
let time = startingSeconds;     //Sets time equal to starting seconds
const updateCountMax = 4;       //Sets updatecountmax to 4, which is used to update the countdown 4 times a second later on.
let updateCount = 0;
let timerFinished = false;

let workoutNum = 0;
let imageNum = 0;

const workout = [
    {'time': 15, 'name': '1/10 Get Ready...', 'image': "../Logos/white.png"},
    {'time': 20, 'name': '1/10 Sit-ups', 'image': "../Logos/sit-ups.gif"},
    {'time': 10, 'name': '2/10 Rest', 'image': "../Logos/white.png"},
    {'time': 20, 'name': '2/10 V-ups', 'image': "../Logos/v-ups.gif"},
    {'time': 10, 'name': '3/10 Rest', 'image': "../Logos/white.png"},
    {'time': 20, 'name': '3/10 Push-ups', 'image': "../Logos/Push-ups.gif"},
    {'time': 10, 'name': '4/10 Rest', 'image': "../Logos/white.png"},
    {'time': 20, 'name': '4/10 Scissors', 'image': "../Logos/scissors.gif"},
    {'time': 10, 'name': '5/10 Rest', 'image': "../Logos/white.png"},
    {'time': 20, 'name': '5/10 Abdominal crunches', 'image': "../Logos/abdominal.gif"},
    {'time': 10, 'name': '6/10 Rest', 'image': "../Logos/white.png"},
    {'time': 20, 'name': '6/10 Leg raises', 'image': "../Logos/legraises.gif"},
    {'time': 10, 'name': '7/10 Rest', 'image': "../Logos/white.png"},
    {'time': 45, 'name': '7/10 Plank', 'image': "../Logos/plank.gif"},
    {'time': 10, 'name': '8/10 Rest', 'image': "../Logos/white.png"},
    {'time': 45, 'name': '8/10 left-side Plank', 'image': "../Logos/sideplank.gif"},
    {'time': 10, 'name': '9/10 Rest', 'image': "../Logos/white.png"},
    {'time': 45, 'name': '9/10 right-side Plank', 'image': "../Logos/sideplank.gif"},
    {'time': 10, 'name': '10/10 DONE', 'image': "../Logos/white.png"},
    
    
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

function updateTime() {
    const minutes = Math.floor(time / (60));
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

    if(minutes <= 0 && seconds <= 0){
        timerFinished = true;
        workoutNum++;
        imageNum++;
        paused = false;
        return
    }
}

function updateCountdown() {                                //This happens every 1/4 of a second if it is not paused.
    if (!paused && updateCount >= updateCountMax && !timerFinished){
        updateTime();
        updateCount=0;

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
    updateTime(); // Update the clock here to avoid delay
    exerciseNameEl.innerHTML = `${workout[workoutNum]['name']}`;
    myImage.src = workout[imageNum]['image'];
    timerFinished = false;
}