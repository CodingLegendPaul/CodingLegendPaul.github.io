const durationInput1 = document.querySelector('#duration');  //Sets a non reassignable variable of duration of the countdown from the inputted into the html
const startButton = document.querySelector('#start');       //Sets a non reassignable variable of start button
const pauseButton = document.querySelector('#pause');       //Sets a non reassignable variable of pause button
const circle = document.querySelector('circle');            //Sets a non reassignable variable of the circle

const perimeter = circle.getAttribute('r') * 2 * Math.PI;   //Sets perimeter of the circle using maths 
circle.setAttribute('stroke-dasharray', perimeter);

const totalLoops = 14;

let duration;                                              //Set a reassignable variable as duration
startTimerFunction(durationInput1, totalLoops)
function startTimerFunction(durationInput, loops){
  let timer = new Timer(durationInput, startButton, pauseButton, {  //Timer is set to the whole of the duration, start and pause button put together
    onStart(totalDuration) {
      duration = totalDuration;
    },
    onTick(timeRemaining) {
      circle.setAttribute(
        'stroke-dashoffset',
        (perimeter * timeRemaining) / duration - perimeter
      );
    },
    onComplete() {
      console.log('Timer is completed');
      if(loops != 0){
        console.log(loops)
        startTimerFunction(durationInput, loops-1)
      }
    }
  });
}
  


