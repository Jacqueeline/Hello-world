// Hämta knapp elementet
const button = document.getElementById("myBtn");

// Skapa funktionen som gör kanppen klickbar
function clickButton() {
    document.getElementById("title").textContent =("Goodbye World.");
}

// Lägg till en eventListener(metod) som lyssnar på klickhändelsen(elementet)
button.addEventListener("click", clickButton);
