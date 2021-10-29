const open = document.getElementsByClassName("open");
const close = document.getElementsByClassName("close");
const popupContainer = document.getElementsByClassName("popupContainer");

const flexContainer = document.getElementsByID("flexContainer_Artists");

open.addEventListener("click", () => {
    popupContainer.classList.add("show");
    flexContainer.classList.add("hide");
});

close.addEventListener("click", () => {
    popupContainer.classList.remove("show");
    flexContainer.classList.remove("hide");
});