    // Setter dagen og tidspunkt det telles ned mot
const countDownDate = new Date("Dec 24, 2021 12:00:00").getTime();


    // Oppdaterer timeren med -1 hvert sekund
var x = setInterval(function() {

    // Henter dagens dato og tid
let now = new Date().getTime();
    
    // Finner diferansen mellom dagens dato og dagen det telles ned mot
var distance = countDownDate - now;
    
    // Kalkulasjoner for å få rett format på dager, timer...
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    //Viser nedtellingen  
document.getElementById("daysId").innerHTML = days;
document.getElementById("hoursId").innerHTML = hours;
document.getElementById("minutesId").innerHTML = minutes;
document.getElementById("secondsId").innerHTML = seconds;
	
	

// Viser melding når nedtellingen er ferdig
if (distance < 0) {
    clearInterval(x);
    document.getElementById("finishMessageId").innerHTML = "Festivalern er igang!";
    }
}, 1000);
