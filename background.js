// Sélectionne l'élément de recherche (input[type="text"])
let search = document.querySelector('input[type="text"]');

// Fonction pour simuler l'appui sur la touche "Entrée"
function simulateEnterKey() {
    var enterEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        bubbles: true,
        cancelable: true
    });

    // Déclenche l'événement sur l'élément de recherche
    search.dispatchEvent(enterEvent);
}
 window.onkeyup = e => e.key === 'v' && (document.activeElement === search ? search.blur() : search.focus())
// Vérifie si l'URL actuelle est sur YouTube
let linkNow = window.location.href;
let contentlink = linkNow.includes('www.youtube.com');

// Si l'URL est sur YouTube
contentlink = () => search.addEventListener('focus', () => window.onkeyup = e => (e.ctrlKey && e.altKey && e.code === 'Space') && (simulateEnterKey())) 
    // Ajoute un écouteur d'événements de focus à l'élément de recherche
    
contentlink()



//l_K_W();