
// Ønsker å fylle lista (antall billetter) med antall billetter fra 1 - 10
var select = document.getElementById("quantity");

for(let i=1; i < 11; i++){
    // Lager en option-instans for hver i fra 1 til 10
    var opt = document.createElement("option");
    // Verdien til hvert valg skal altså være i-en
    opt.value = i;
    // Liten gramatisk ting her, 1 billett er entall, resten er flertall
    if (i == 1) {
        opt.innerHTML = i + " billett";
    }
    else    {
        opt.innerHTML = i + " billetter";
    }
    // Legger til slutt til valget som er konstruert med tilhørende verdi
    select.appendChild(opt);
}

var date = new Date();
date.setMonth(date.getMonth() + 3) 
// Ønsker å ha et buffer på utgangsdato, slik at betaling er sikret

var binding = "-";
if (date.getMonth() < 10) {
    binding = "-0";
}
// Ønsker så å lage et gyldig dato-format av dette på formen YYYY-MM, her må vi legge til en 0 foran hvis måneden er før 10

document.getElementById("expiryDate").min = date.getFullYear() + binding + date.getMonth();
// Setter så datoen jeg fant (måneden det året) til minstedato for expiryDate


// deklarerer konstanter med sti til elementer i HTMLen
const type = document.getElementById("type");
const firstName = document.getElementById("firstName");
const surName = document.getElementById("surName");
const tlf = document.getElementById("tlf");
const eMail = document.getElementById("eMail");
const postNr = document.getElementById("postNr");
const cardNr = document.getElementById("cardNr");
const cvc = document.getElementById("cvc");
const conditions = document.getElementById("conditions");
const form = document.getElementById("formId");

// Legger så til lyttere på ønskede felt
firstName.addEventListener("input", function() {
    alphaValidation(firstName);
});
surName.addEventListener("input", function() {
    alphaValidation(surName);
});
tlf.addEventListener("input", tlfNumberFormatter);
postNr.addEventListener("input", function() {
    numberValidation(postNr, 4);
});
cardNr.addEventListener("input", cardNumberFormatter);
cvc.addEventListener("input", function() {
    numberValidation(cvc, 3);
});
form.addEventListener("submit", ticketBought);

// Og placeholdere...
firstName.placeholder = "Ola";
surName.placeholder = "Nordman";
tlf.placeholder = "123 - 45 - 678"
eMail.placeholder = "olanordman@hotmail.no"
postNr.placeholder = "1234";
cardNr.placeholder = "1234-5678-1234-5678"
cvc.placeholder = "123";

// Og setter betingelsene til required
conditions.required = true;

// Funksjon som validerer at det kun er bokstaver
// Tar inn sti
function alphaValidation(path) {
    // Sender verdien til stien til hjelpefunksjonen
    const formattedAlpha = formattAlpha(path.value);
    
    // Setter den validerte verdien til sti-feltet
    path.value = formattedAlpha;
}

// Hjelpefunksjon som tar seg av valideringen
function formattAlpha(value)   {
    // Trenger ikke validere hvis mengden er tom
    if(!value) return value;

    // Fjerner så alt som ikke er tillatt
    // Ønsker å tillate alle bokstaver i tillegg til mellomrom og bindestrek ved dobbeltnavn
    var alpha = value.replace(/[.,!=*+/&%#"?^${}()|[\]\\]/g, "");
    alpha = alpha.replace(/[0-9]/g, "");

    // Returnerer verdien som kun alfabetiske-tegn (pluss bindestrek osv.)
    return alpha;
}

// Funksjon som formaterer telefonnummer etterhvert som bruker skriver
function tlfNumberFormatter()  {
    // Sender verdien i tlf-feltet til funskjonen som formaterer, lagrer dette formatet i konstanten 
    const formattedInputValue = formattTlfNumber(tlf.value);

    // Setter feltet til den formaterte verdien
    tlf.value = formattedInputValue;
}

// Hjelpefunskjon som tar seg av selve formateringen
function formattTlfNumber(value)   {
    // Trenger ikke formatere hvis verdien er tom
    if(!value) return value;

    // Fjerner så alt som ikke er tall
    const phoneNumber = value.replace(/[^\d]/g, "");

    // Finner så lengden på nummeret, dette brukes senere
    const phoneNumberLength = phoneNumber.length;

    // Hvis lengden er < 4, så trengs det ikke å gjøres noe
    if (phoneNumberLength < 4)  {
        return phoneNumber;
    }
    // Hvis lengden er 4 eller 5 så skal første og andre del splittes av "-"
    if (phoneNumberLength < 6) {
        return `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(3)}`;
    }
    // Hvis lengden er 6, 7 eller 8 så skal første og andre, og andre og tredje del splittes av "-"
    return `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(3, 5)} - ${phoneNumber.slice(5, 8)}`;
}

// Funksjon som validerer at det kun er tall
// Tar inn sti, og ønsket maks-lengde
function numberValidation(path, length) {
    // Sender verdien til stien sammen med lengden til hjelpefunksjonen
    const formattedNumber = formattNumber(path.value, length);
    
    // Setter den validerte verdien til sti-feltet
    path.value = formattedNumber;
}

// Hjelpefunksjon som tar seg av valideringen
function formattNumber(value, length)   {
    // Trenger ikke validere hvis mengden er tom
    if(!value) return value;

    // Fjerner så alt som ikke er tall
    const number = value.replace(/[^\d]/g, "");

    // Finner så lengden på tallet
    const numberLength = number.length;

    // Og sammenligner dette med ønsket lengde
    if(numberLength < (length + 1)) {
        return number;
    }
    // Fjerne overflødige tall dersom det er noen
    return number.slice(0, length);
}

// Funksjon som formaterer kortnummer etterhvert som bruker skriver
function cardNumberFormatter()  {
    // Sender verdien i kortNr-feltet til funskjonen som formaterer, lagrer dette formatet i konstanten 
    const formattedInputValue = formattCardNumber(cardNr.value);

    // Setter feltet til den formaterte verdien
    cardNr.value = formattedInputValue;
}

// Hjelpefunskjon som tar seg av selve formateringen
function formattCardNumber(value)   {
    // Trenger ikke formatere hvis verdien er tom
    if(!value) return value;

    // Fjerner så alt som ikke er tall
    const cardNumber = value.replace(/[^\d]/g, "");

    // Finner så lengden på nummeret, dette brukes senere
    const cardNumberLength = cardNumber.length;

    // Hvis lengden er < 5, så trengs det ikke å gjøres noe
    if (cardNumberLength < 5)  {
        return cardNumber;
    }
    // Hvis lengden er mellom 4 og 9 så skal første og andre del splittes av " "
    if (cardNumberLength < 9) {
        return `${cardNumber.slice(0, 4)}-${cardNumber.slice(4)}`;
    }
    // Hvis lengden er mellom 9 og 13 så skal første og andre, og andre og tredje del splittes av " "
    if (cardNumberLength < 13) {
        return `${cardNumber.slice(0, 4)}-${cardNumber.slice(4, 8)}-${cardNumber.slice(8)}`;
    }
    // Hvis lengden er mer enn 12 så skal første og andre, og andre og tredje, og tredje og fjerde del splittes av " "
    return `${cardNumber.slice(0, 4)}-${cardNumber.slice(4, 8)}-${cardNumber.slice(8, 12)}-${cardNumber.slice(12, 16)}`;
}

function ticketBought()   {
    alert("Billettkjøp fullført! \nFølgende info er registrert: \n Billettype: " + type.value + "\n Antall billetter: " + select.value + "\n Navn: " + firstName.value + " " + surName.value + "\n Telefonnummer: " + tlf.value + "\n Epost: " + eMail.value + "\nDu vil motta kvittering på epost om kort tid \nTakk for din bestilling hos Marka 2022");
}
