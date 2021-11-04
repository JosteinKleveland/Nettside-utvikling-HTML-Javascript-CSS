
const icons = document.querySelectorAll(".mapIcon");
const inngang = document.getElementById("inngangIcon");
const box = document.getElementsByClassName("iconText");



const divs = document.querySelectorAll('.a');

icons.forEach(el => el.addEventListener('click', event => {
 openMapInfo(event.currentTarget.getAttribute("iconTarget"))}));


function openMapInfo(infoID) {
    document.getElementById(infoID).style.display = "block";
    console.log("open")
  }
  
function closeMapInfo() {
    document.box.style.display = "none";
    console.log("close")
  }


window.onclick = function (event) {
    let popup = document.getElementById("inngangText");
    if (event.target == popup) {
      closeMapInfo();
    }
  }