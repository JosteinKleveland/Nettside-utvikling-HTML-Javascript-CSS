
/* Funksjon som lager navbar og footer */

let logoCreated = false;                                                            /* Forhindrer en error ved funksjonen "logoScroll", slik at den ikke kjører før logoen er laget */


window.onload = function() {onLoadNavbarFooter()};


function onLoadNavbarFooter() {

    /* NAVBAR: --------------------------*/

    const backupNavbar = document.getElementById("backupNavbar");
    backupNavbar.style.display = "none";

    const navbar = document.getElementById("navbar");


    /* LOGO */

    const logoBox = document.createElement("a");
    logoBox.id = "logoBox";
    logoBox.setAttribute("href", "index.html");

    const logo = document.createElement("img");
    logo.setAttribute("id", "navbarLogo");
    logo.setAttribute("src", "img/logo_marka.png");
    logo.setAttribute("alt", "Logo");


    if(document.documentElement.scrollTop > 50) {                                   /*  Sørger for at logoen får riktig størrelse. https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp */
        logo.style.height = "90px";
        logo.style.width = "90px";
        
    }
    else {
        if (window.innerWidth > 900) {                                              /* https://www.w3schools.com/jsref/prop_win_innerheight.asp */
            logo.style.width = "180px";            
            logo.style.height = "180px";
        }
        else {
            logo.style.height = "90px";
            logo.style.width = "90px";
            logo.style.transition = "0.6s";
        }
    };


    logoBox.appendChild(logo);
    navbar.appendChild(logoBox);

    logoCreated = true;


    /* NAVBAR-LINKER / MOBILNAVBAR-LINKER */

    const navbarElements = document.createElement("div");
    navbarElements.id = "navbarElements";

    const navbarList = document.createElement("ul");


    const webPageObjects = [
        {
            pageName: "Forside",
            pageDocName: "index.html",
        },
        {
            pageName: "Program",
            pageDocName: "program.html",
        },
        {
            pageName: "Billettkjøp",
            pageDocName: "billettkjop.html",
        },
        {
            pageName: "Om festivalen",
            pageDocName: "omFestivalen.html",
        },
        {
            pageName: "Kontaktinfo",
            pageDocName: "kontaktinfo.html",
        }
    ];


    const currentPageFileName = String(location.href.split("/").slice(-1));             /* https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript */

    const navbarElementsMobile = document.getElementById("navbarElementsMobile");


    for(let i = 0; i < 5; i++){
        let navbarListElement = document.createElement("li");
        let navbarListElementLink = document.createElement("a");
        let navbarMobileElement = document.createElement("a");

        if (webPageObjects[i].pageDocName == currentPageFileName) {
            navbarListElementLink.setAttribute("id", "currentPage");
            navbarMobileElement.setAttribute("id", "currentPageMobile");
        }
        else {
            navbarListElementLink.setAttribute("class", "otherPage");
            navbarMobileElement.setAttribute("class", "otherPageMobile");
        };

        navbarListElementLink.setAttribute("href", webPageObjects[i].pageDocName);
        navbarMobileElement.setAttribute("href", webPageObjects[i].pageDocName);

        let navbarListElementText = document.createTextNode(webPageObjects[i].pageName); 
        navbarListElementLink.appendChild(navbarListElementText);

        let navbarMobileElementParagraph = document.createElement("p");
        navbarMobileElementParagraph.setAttribute("class", "navbarElementButtonMobile");

        let navbarMobileElementParagraphText = document.createTextNode(webPageObjects[i].pageName);

        navbarMobileElementParagraph.appendChild(navbarMobileElementParagraphText);
        navbarMobileElement.appendChild(navbarMobileElementParagraph);
        navbarElementsMobile.appendChild(navbarMobileElement);
        navbarListElement.appendChild(navbarListElementLink);
        navbarList.appendChild(navbarListElement);
    };


    navbarElements.appendChild(navbarList);
    navbar.appendChild(navbarElements);


    /* MOBILNAVBAR-KNAPP */

    const navbarMobile = document.getElementById("navbarMobile");
    

    for(let i = 0; i < 3; i++){
        let hamburgerLine = document.createElement("div");
        hamburgerLine.setAttribute("class", "hamburgerLine");
        navbarMobile.appendChild(hamburgerLine);
    };


    navbar.style.position = "fixed";


    /* FOOTER: ---------------------------------------*/

    const footer = document.getElementById("footer");


    /* INFO OM SOME-LINKER OG HOVEDSPONSORER */

    const soMeObjects = [
        {
            soMeLink: "https://www.facebook.com",
            soMeSource: "img/facebook.svg",
            soMeAlt: "Facebook",
        },
        {
            soMeLink: "https://www.instagram.com",
            soMeSource: "img/instagram.svg",
            soMeAlt: "Instagram",
        },
        {
            soMeLink: "https://www.tiktok.com",
            soMeSource: "img/tiktok.svg",
            soMeAlt: "TikTok",
        }
    ];

    const mainSponsorObjects = [
        {
            sponsorLink: "https://www.xxl.no",
            sponsorId: "footerSponsorXXL",
            sponsorSource: "img/sponsorXXL.svg",
            sponsorAlt: "XXL logo",
        },
        {
            sponsorLink: "https://www.rema.no",
            sponsorId: "footerSponsorRema1000",
            sponsorSource: "img/sponsorRema1000.svg",
            sponsorAlt: "Rema 1000 logo",
        },
        {
            sponsorLink: "https://www.dnb.no",
            sponsorId: "footerSponsorDNB",
            sponsorSource: "img/sponsorDNB.svg",
            sponsorAlt: "DNB logo",
        },
    ];


    /* SOME-LINKER */

    const soMeButtons = document.createElement("div");
    soMeButtons.id = "soMeButtons";

    for(let i = 0; i < 3; i++){
        let soMeButton = document.createElement("a");
        soMeButton.setAttribute("href", soMeObjects[i].soMeLink);
        soMeButton.setAttribute("target", "_blank");

        let soMeButtonImage = document.createElement("img");
        soMeButtonImage.setAttribute("src", soMeObjects[i].soMeSource);
        soMeButtonImage.setAttribute("alt", soMeObjects[i].soMeAlt);

        soMeButton.appendChild(soMeButtonImage);
        soMeButtons.appendChild(soMeButton);
    };

    footer.appendChild(soMeButtons);
    

    /* HOVEDSPONSOR-LINKER */

    const mainSponsorButtons = document.createElement("div");
    mainSponsorButtons.id = "mainSponsorButtons";

    for(let i = 0; i < 3; i++){
        let mainSponsorButton = document.createElement("a");
        mainSponsorButton.setAttribute("href", mainSponsorObjects[i].sponsorLink);
        mainSponsorButton.setAttribute("target", "_blank");

        let mainSponsorButtonImage = document.createElement("img");
        mainSponsorButtonImage.id = mainSponsorObjects[i].sponsorId;
        mainSponsorButtonImage.setAttribute("src", mainSponsorObjects[i].sponsorSource);
        mainSponsorButtonImage.setAttribute("alt", mainSponsorObjects[i].sponsorAlt);

        mainSponsorButton.appendChild(mainSponsorButtonImage);
        mainSponsorButtons.appendChild(mainSponsorButton);
    };

    footer.appendChild(mainSponsorButtons);


    /* KNAPP SOM TAR BRUKER TIL TOPPEN AV SIDEN */

    const toTopOfPageHover = document.createElement("div");
    toTopOfPageHover.id = "toTopOfPageHover";
    toTopOfPageHover.setAttribute("onclick", "toTop()");

    const toTopOfPageHoverImage = document.createElement("img");
    toTopOfPageHoverImage.setAttribute("src", "img/tilToppsHover_placeholder.png");
    toTopOfPageHoverImage.setAttribute("alt", "Til toppen av siden");

    toTopOfPageHover.appendChild(toTopOfPageHoverImage);
    footer.appendChild(toTopOfPageHover);


    const toTopOfPageDefault = document.createElement("div");
    toTopOfPageDefault.id = "toTopOfPageDefault";
    toTopOfPageDefault.setAttribute("onclick", "toTop()");

    const toTopOfPageDefaultImage = document.createElement("img");
    toTopOfPageDefaultImage.setAttribute("src", "img/tilToppsDefault_placeholder.png");
    toTopOfPageDefaultImage.setAttribute("alt", "Til toppen av siden");

    toTopOfPageDefault.appendChild(toTopOfPageDefaultImage);
    footer.appendChild(toTopOfPageDefault);


    /* COPYRIGHT */

    const copyrightParagraph = document.createElement("p");
    copyrightParagraph.id = "copyright";

    const copyrightParagraphText = document.createTextNode("© Marka 2021");

    copyrightParagraph.appendChild(copyrightParagraphText);
    footer.appendChild(copyrightParagraph);
};



/* FUNKSJON SOM SENDER BRUKER TIL TOPPEN AV SKJERMEN */

function toTop() {                                          /* https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript */
    window.scrollTo(0,0);
};



/* FUNKSJON SOM ENDRER STØRRELSE PÅ LOGO I NAVBAR NÅR BRUKER SCROLLER */

window.onscroll = function() {logoScroll()};

function logoScroll() {
    if(logoCreated == true) {
        if(document.documentElement.scrollTop > 50) {
            document.getElementById("navbarLogo").style.height = "90px";
            document.getElementById("navbarLogo").style.width = "90px";
            document.getElementById("navbarLogo").style.transition = "0.6s";
        }
        else {
            if (window.innerWidth > 900) {
                document.getElementById("navbarLogo").style.width = "180px";
                document.getElementById("navbarLogo").style.height = "180px";
                
            }
            else {
                document.getElementById("navbarLogo").style.height = "90px";
                document.getElementById("navbarLogo").style.width = "90px";
            };
        };
    };
};


/* FUNKSJON SOM ENDRER STØRRELSE PÅ LOGO I NAVBAR NÅR BREDDEN PÅ VINDUET ENDRES */

function logoResize() {
    if (window.innerWidth < 900) {
        document.getElementById("navbarLogo").style.height = "90px";
        document.getElementById("navbarLogo").style.width = "90px";
        document.getElementById("navbarLogo").style.transition = "0.6s";
    }
    else {
        if (document.documentElement.scrollTop > 50) {
            document.getElementById("navbarLogo").style.height = "90px";
            document.getElementById("navbarLogo").style.width = "90px";
        }
        else {
            document.getElementById("navbarLogo").style.width = "180px";
            document.getElementById("navbarLogo").style.height = "180px";
        };
    };
};


/* FUNKSJONER SOM VISER/SKJULER MOBILNAVBAR */

const navbarElementsMobile = document.getElementById("navbarElementsMobile");
const clickCoverNavbarMobile = document.getElementById("clickCoverNavbarMobile");
let navbarElementsMobileDisplayed = false


function hideNavbarMobile(){
    navbarElementsMobile.style.display = "none";
    clickCoverNavbarMobile.style.display = "none";
};


function navbarMobileOnClick(idClicked) {
    if(idClicked === "navbarMobile" && navbarElementsMobileDisplayed === false) {
        navbarElementsMobile.style.display = "block";
        clickCoverNavbarMobile.style.display = "block";
        navbarElementsMobileDisplayed = true;
    }
    else if(idClicked === "clickCoverNavbarMobile" || (idClicked === "navbarMobile" && navbarElementsMobileDisplayed === true)) {
        navbarElementsMobile.style.display = "none";
        clickCoverNavbarMobile.style.display = "none";
        navbarElementsMobileDisplayed =  false;
    };
};