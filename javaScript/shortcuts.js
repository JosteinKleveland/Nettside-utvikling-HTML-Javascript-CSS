/* Javascript til å scrolle nettsiden ned til den aktuelle dagen det refereres til i knappene på programsiden*/

/* Lagrer først referanser til knappene */
const fridayButton = document.getElementById("friday");
const saturdayButton = document.getElementById("saturday");
const sundayButton = document.getElementById("sunday");

/* Lagrer referanser til overskriftene som siden skal flyttes til når knappene trykkes */
const fridayHeader = document.getElementById("fridayHeader");
const saturdayHeader = document.getElementById("saturdayHeader");
const sundayHeader = document.getElementById("sundayHeader");

/* Eventlisteners til når knappene faktisk trykkes */
fridayButton.addEventListener("click", () => {
    fridayHeader.scrollIntoView();
})
saturdayButton.addEventListener("click", () => {
    saturdayHeader.scrollIntoView();
})

sundayButton.addEventListener("click", () => {
    sundayHeader.scrollIntoView();
})
