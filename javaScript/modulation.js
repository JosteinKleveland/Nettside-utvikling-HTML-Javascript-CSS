
/* Funksjon som lager logoen i navbaren. Sørger for at transitions ikke ødelegger loadingen. */

window.onload = function() {onLoadLogo()};

function onLoadLogo() {
    const logoBox = document.getElementById("logoBox");
    const logo = document.createElement("img");
    
    logo.setAttribute("id", "navbarLogo");
    logo.setAttribute("src", "img/logo_placeholder.png");
    logo.setAttribute("alt", "Logo");

    logoBox.appendChild(logo);

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbarLogo").style.height = "90px";
        document.getElementById("navbarLogo").style.width = "90px";
        document.getElementById("navbarLogo").style.transition = "0.6s"
    }
    else {
        if (window.innerWidth > 900) {
            document.getElementById("navbarLogo").style.width = "180px";
            document.getElementById("navbarLogo").style.height = "180px";
            
        }
        else {
            document.getElementById("navbarLogo").style.height = "90px";
            document.getElementById("navbarLogo").style.width = "90px";
            document.getElementById("navbarLogo").style.transition = "0.6s"
        }
    }
}


/*  Funksjon som sender brukeren til toppen av skjermen */

function toTop() {
    window.scroll(0,0)
}

/* Funksjon som krymper logoen i navbar når bruker scroller ned på siden */

window.onscroll = function() {logoScroll()};

function logoScroll() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbarLogo").style.height = "90px";
        document.getElementById("navbarLogo").style.width = "90px";
    }
    else {
        if (window.innerWidth > 900) {
            document.getElementById("navbarLogo").style.width = "180px";
            document.getElementById("navbarLogo").style.height = "180px";
            document.getElementById("navbarLogo").style.transition = "0.6s"
        }
        else {
            document.getElementById("navbarLogo").style.height = "90px";
            document.getElementById("navbarLogo").style.width = "90px";
        }
    }
}


/* Funksjon som krymper logoen i navbar når vinduet er under 900px */

function logoResize() {
    if (window.innerWidth < 900) {
        document.getElementById("navbarLogo").style.height = "90px";
        document.getElementById("navbarLogo").style.width = "90px";
        document.getElementById("navbarLogo").style.transition = "0.6s"
    }
    else {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("navbarLogo").style.height = "90px";
            document.getElementById("navbarLogo").style.width = "90px";
        }
        else {
            document.getElementById("navbarLogo").style.width = "180px";
            document.getElementById("navbarLogo").style.height = "180px";
        }
    }
}


