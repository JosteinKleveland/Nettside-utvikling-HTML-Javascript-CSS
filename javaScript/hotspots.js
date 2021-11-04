
const icons = document.querySelectorAll(".mapIcon");
const inngang = document.getElementById("inngangIcon");
const box = document.getElementsByClassName("iconText");
const closeButton = document.querySelectorAll(".closeMap");

icons.forEach(el => el.addEventListener('click', event => {
 openMapInfo(event.currentTarget.getAttribute("iconTarget"))}));

closeButton.forEach(el => el.addEventListener('click', event => {
    closeMapInfo(event.currentTarget.closest(".iconText").id)}));


function openMapInfo(infoID) {
    document.getElementById(infoID).style.display = "block";
    console.log("open")
  }
  
function closeMapInfo(infoID) {
    document.getElementById(infoID).style.display = "none";
    console.log("close")
  }


window.onclick = function (event) {
    let popup = document.getElementById("inngangText");
    if (event.target == popup) {
      closeMapInfo();
    }
  }