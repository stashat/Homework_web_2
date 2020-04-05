var timer;
var pomodoro = false;
var shortBreak = false;
var longBreak = false;
var stopClick = false;
var resetClick = false;
var audio = new Audio('audio.wav');
var startClicked = false;

function startTimer(duration){
    // Set the date we're counting down to
    var countDownDate = Date.now() + duration*60000;

    // Update the count down every 1 second
    timer = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000) + 1;

        // Display the result in the element with id="demo"
        document.getElementById('MyClockDisplay').innerHTML = minutes + ": " + seconds;
    }, 1000);
}

document.getElementById('pomodoro').onclick = function(){
    document.getElementById('buttons').style.visibility = 'visible';
    document.getElementById('MyClockDisplay').style.visibility = 'visible';
    startClicked = false;
    pomodoro = true;
    shortBreak = false;
    longBreak = false;
    clearInterval(timer)
    document.getElementById('MyClockDisplay').innerHTML = '00:00';
}
document.getElementById('shortB').onclick = function(){
    document.getElementById('buttons').style.visibility = 'visible';
    document.getElementById('MyClockDisplay').style.visibility = 'visible';
    startClicked = false;
    pomodoro = false;
    shortBreak = true;
    longBreak = false;
    clearInterval(timer)
    document.getElementById('MyClockDisplay').innerHTML = '00:00';
}
document.getElementById('longB').onclick = function(){
    document.getElementById('buttons').style.visibility = 'visible';
    document.getElementById('MyClockDisplay').style.visibility = 'visible';
    startClicked = false;
    pomodoro = false;
    shortBreak = false;
    longBreak = true;
    clearInterval(timer)
    document.getElementById('MyClockDisplay').innerHTML = '00:00';
}
document.getElementById('start').onclick = function() {
    startClicked = true;
    if(document.getElementById('MyClockDisplay').textContent==='00:00'){
        if(pomodoro){
            startTimer(25)
        }
        if(shortBreak){
            startTimer(5)
        }
        if(longBreak){
            startTimer(10)
        }
    }
};

document.getElementById('reset').onclick = function() {
    startClicked = false;
    resetClick = true;
    console.log(pomodoro)
    clearInterval(timer)
    if(document.getElementById('MyClockDisplay').textContent !='00:00'){
        if(pomodoro){
            document.getElementById('MyClockDisplay').innerHTML = '25:00';
        }
        if(shortBreak){
            document.getElementById('MyClockDisplay').innerHTML = '5:00'
        }
        if(longBreak){
            document.getElementById('MyClockDisplay').innerHTML = '10:00'
        }
    }
};

document.getElementById('stop').onclick = function() {
    startClicked = false;
    window.clearInterval(timer)
    if(resetClick){
        if(pomodoro){
            startTimer(25)
            resetClick = false;
        }
        if(shortBreak){
            startTimer(5)
            resetClick = false;
        }
        if(longBreak){
            startTimer(10)
            resetClick = false;
        }
    }
};

setInterval(function(){
    document.getElementById('title').innerText = '(' + document.getElementById('MyClockDisplay').textContent + ') TomatoTimer'
},1000);

if(startClicked && document.getElementById('MyClockDisplay').textContent === '0:0'){
    audio.play()
}