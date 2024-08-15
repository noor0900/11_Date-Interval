
const time = document.querySelector(".time");
const timestatus = document.querySelector(".AM");
const calendar = document.querySelector(".Date");


setInterval(() => {
    let sec = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();
    let date = new Date().getDate();
    let month= new Date().getMonth()+1;
    let FullYear = new Date().getFullYear();

    if (sec < 10) {
        sec = `0${sec}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (hours > 12) {
        timestatus.innerText = "PM";
        hours = `0${hours - 12}`;
    }
    if(date < 10){
        date = `0${date}`;
    }
    if(month < 10){
        month = `0${month}`;
    }   
    if(FullYear <= 10){
        FullYear = `0${FullYear}`;
    }
    else {
        timestatus.innerText = "AM";
    }   
    time.innerText = `${hours}:${minutes}:${sec}`;  
    calendar.innerText = `${date}/${month}/${FullYear}` 

}, 1000);

