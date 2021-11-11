//Inspirert av https://www.w3schools.com/howto/howto_js_countdown.asp
    
    // Setter dagen og tidspunkt det telles ned mot
const countDownDate = new Date("Jul 01, 2022 20:00:00").getTime();


    // Oppdaterer timeren med -1 hvert sekund
let x = setInterval(function() {

    // Henter dagens dato og tid
let now = new Date().getTime();
    
    // Finner diferansen mellom dagens dato og dagen det telles ned mot
let distance = countDownDate - now;
    
    // Kalkulasjoner for å få rett format på dager, timer...
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    //Viser nedtellingen  
document.getElementById("daysId").innerHTML = isOneZero(days);
document.getElementById("hoursId").innerHTML = isOneZero(hours);
document.getElementById("minutesId").innerHTML = isOneZero(minutes);
document.getElementById("secondsId").innerHTML = isOneZero(seconds);
	
	

// Viser meldingen og skjuler counteren når nedtellingen er ferdig
if (distance < 0) {
    clearInterval(x);
    hideCountdown();
    document.getElementById("finishMessageId").innerHTML = "Festivalen er igang!";
    }
}, 1000);


// Funksjon for å sikre at det alltid minst to siffer, selv om det er et tall under 10
function isOneZero(numberToCheck) {
if (numberToCheck < 10) {
    return "0"+ numberToCheck;
    }
else{
    return numberToCheck
    }
}

//Funksjon for å skjule countdown
function hideCountdown(){
    countdownId.style.display = "none";
    finishMessageId.style.display = "block";
}