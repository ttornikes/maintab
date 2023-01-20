const hoursEl=document.getElementById("hours");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");

function updateClock (){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()


    let ampm = "AM";

    if(h>12){
        h-=12;
        ampm ="PM"
    }

    hoursEl.innerHTML=h;
    minutesEl.innerHTML=m;
    secondsEl.innerHTML=s;

    ampmEl, (innerHTML=ampm);

    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock();


