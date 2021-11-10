
const icons = document.querySelectorAll(".mapIcon");
const closeButton = document.querySelectorAll(".closeMap");
const outerWrapper = document.querySelectorAll(".modal")

icons.forEach(el => el.addEventListener('click', event => {
 openMapInfo(event.currentTarget.getAttribute("data-modal-target"))}));

closeButton.forEach(el => el.addEventListener('click', event => {
    closeMapInfo(event.currentTarget.closest(".modal").id)}));

outerWrapper.forEach(el => el.addEventListener('click', event => {
    closeMapInfoOutside(event.currentTarget.closest(".modal").id)}));

function openMapInfo(infoID) {
    document.getElementById(infoID).style.display = "flex";
    console.log("open")
  }
  
function closeMapInfo(infoID) {
    document.getElementById(infoID).style.display = "none";
    console.log("close")
  }

  function closeMapInfoOutside(outerWrapperID) {
    document.getElementById(outerWrapperID).style.display = "none";
  }