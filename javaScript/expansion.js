
/* Definerer konstanter med referanser til ulike typer elementer for å kunne referere direkte til den lagrede konstanten */
const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

/* One-liner slik at hvert element i modalTriggerButtons merker når det blir klikket på, og viser popup-vinduet  */
modalTriggerButtons.forEach(elem => {
    elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
})
/* One-liner som skjuler innholdet igjen, når x-en trykkes på. Denne løkken og den over bruker funksjonen toggleModal(modalId) */
modalCloseButtons.forEach(elem => {
    elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));
})
/* Til når man trykker utenfor popup-vinduet og ønsker at det skal lukke seg, kjøres også funksjonen toggleModal(modalId)  */
modals.forEach(elem => {
    elem.addEventListener("click", event => {
        if(event.currentTarget===event.target) toggleModal(event.currentTarget.id);
    });
})

/* Funksjon som lagrer konstanten til hver div med riktig referanse, og endrer displayet slik at popup-vinduet vises eller ikke */
function toggleModal(modalId) {

    const modal = document.getElementById(modalId);

    if(getComputedStyle(modal).display==="flex") {
        modal.style.display = "none";
        document.body.style.overflow = "initial";
    }
    else {
        modal.style.display = "flex";
        }
}

/* Javascript til å scrolle nettsiden ned til den aktuelle dagen det refereres til i knappene */

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


