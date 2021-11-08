
/* Funksjon som lager navbar og footer */

window.onload = function() {onLoadNavbarFooter()};

function onLoadNavbarFooter() {

    /* NAVBAR: -------------------*/

    const backupNavbar = document.getElementById("backupNavbar");
    backupNavbar.style.display = "none";

    const clickCoverNavbarMobile = document.getElementById("clickCoverNavbarMobile");
    clickCoverNavbarMobile.setAttribute("onclick", "navbarMobileOnClick(event.currentTarget.id)");

    const navbar = document.getElementById("navbar");
    navbar.style.position = "fixed";

    const logoBox = document.createElement("a");
    logoBox.id = "logoBox";
    logoBox.setAttribute("href", "index.html");

    const logo = document.createElement("img");

    logo.setAttribute("id", "navbarLogo");
    logo.setAttribute("src", "img/logo_marka.png");
    logo.setAttribute("alt", "Logo");

    logoBox.appendChild(logo);

    navbar.appendChild(logoBox);

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
            document.getElementById("navbarLogo").style.transition = "0.6s";
        }
    };


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

    const navbarMobile = document.createElement("div");
    navbarMobile.setAttribute("id", "navbarMobile");
    navbarMobile.setAttribute("onclick", "navbarMobileOnClick(event.currentTarget.id)");
    
    for(let i = 0; i < 3; i++){
        let hamburgerLine = document.createElement("div");
        hamburgerLine.setAttribute("class", "hamburgerLine");
        navbarMobile.appendChild(hamburgerLine);
    };

    navbarElements.appendChild(navbarMobile);

    navbar.appendChild(navbarElements);


    /* FOOTER: -------------------*/


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

    const footer = document.getElementById("footer");

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


    const copyrightParagraph = document.createElement("p");
    copyrightParagraph.id = "copyright";

    const copyrightParagraphText = document.createTextNode("© Marka 2021");

    copyrightParagraph.appendChild(copyrightParagraphText);

    footer.appendChild(copyrightParagraph);
};


/*  Funksjon som sender brukeren til toppen av skjermen */

function toTop() {
    window.scroll(0,0);
};


/* Funksjon som krymper logoen i navbar når bruker scroller ned på siden */

window.onscroll = function() {logoScroll()};

function logoScroll() {
    if(document.documentElement.scrollTop > 50) {
        document.getElementById("navbarLogo").style.height = "90px";
        document.getElementById("navbarLogo").style.width = "90px";
    }
    else {
        if (window.innerWidth > 900) {
            document.getElementById("navbarLogo").style.width = "180px";
            document.getElementById("navbarLogo").style.height = "180px";
            document.getElementById("navbarLogo").style.transition = "0.6s";
        }
        else {
            document.getElementById("navbarLogo").style.height = "90px";
            document.getElementById("navbarLogo").style.width = "90px";
        };
    };
};


/* Funksjon som krymper logoen i navbar når vinduet er under 900px */

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


/* Funksjoner som toggler hamburger-navbar */

const navbarElementsMobile = document.getElementById("navbarElementsMobile");
const modalNavbarMobile = document.getElementById("clickCoverNavbarMobile");

function hideNavbarMobile(){
    navbarElementsMobile.style.display = "none";
    modalNavbarMobile.style.display = "none";
}

function navbarMobileOnClick(idClicked) {
    if(idClicked === "navbarMobile") {
        navbarElementsMobile.style.display = "block";
        modalNavbarMobile.style.display = "block";
    }
    else if(idClicked === "clickCoverNavbarMobile" || idClicked === "navbarMobile") {
        navbarElementsMobile.style.display = "none";
        modalNavbarMobile.style.display = "none";
    };
};