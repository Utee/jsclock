function clock(){
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";

    // if else statemant to check if it either AM or PM

    if (hrs == 0) hrs = 12;
    if(hrs > 12){
        hrs = hrs - 12;
        period = "PM";
    }

    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    // this will link the javascript code to the HTML doc

    let time =  ` ${hrs}:${mins}:${secs} ${period}`;

    setInterval(clock, 1000);
    document.getElementById("clock").innerHTML = time;
}

//this will call the clock fucnction so it can display on the web page

clock();