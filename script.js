

// Hämta text elementet
const title = document.getElementById("title");

// Hämta knapp elementet
const button = document.getElementById("myBtn");

// Skapa funktionen som gör knappen klickbar och en if sats som ändrar texten via knappen
function clickButton() {
    if (title.textContent === "Hello World.") {
    
        title.textContent = "Goodbye World.";
    } else {
        title.textContent = "Hello World."; 
    }
 }

// Lägg till en eventListener(metod) som lyssnar på klickhändelsen(elementet)
button.addEventListener("click", clickButton);
