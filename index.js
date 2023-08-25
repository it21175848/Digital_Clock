const hour1 = document.getElementById("hour")
const minuteE1 = document.getElementById("minutes")
const seccondE1 = document.getElementById("secconds")
const ampmE1 = document.getElementById("ampm")

function updateClock(){
    let h = new Date() .getHours();
    let m = new Date() .getMinutes();
    let s = new Date() .getSeconds();
    let ampm = "AM"

    if (h > 12){
        h = h - 12;
        ampm = "PM";
    }

    hour1.innerText = h;
    minuteE1.innerText = m;
    seccondE1.innerText = s;
    ampmE1, (innerText = ampm);
    setTimeout(()=> {
        updateClock()
    }, 1000)
}

updateClock()