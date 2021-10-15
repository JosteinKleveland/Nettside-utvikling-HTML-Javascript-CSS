
/*  Funksjon som sender brukeren til toppen av skjermen */

function toTop() {
    window.scroll(0,0)
}

/* Funksjon som krymper logoen i navbar når bruker scroller ned på siden */

window.onscroll = function() {logoScroll()};

function logoScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbarLogo").style.height = "90px";
        document.getElementById("navbarLogo").style.width = "90px";
    }
    else{
        document.getElementById("navbarLogo").style.width = "180px";
        document.getElementById("navbarLogo").style.height = "180px";
    }
}

/* Funksjon som krymper logoen i navbar når vinduet er under 900px skal være nedenfor */