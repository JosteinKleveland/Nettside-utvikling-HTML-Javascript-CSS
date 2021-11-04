
const inngang = document.getElementById("inngangIcon");
const box = document.getElementsByClassName("iconText");

inngang.addEventListener("click", openMapInfo);




function openMapInfo() {
    document.getElementById("inngangText").style.display = "block";
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