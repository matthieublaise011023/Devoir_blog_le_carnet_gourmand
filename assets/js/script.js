// 1. SÉLECTION DES ÉLÉMENTS
const boutonPublier = document.querySelector('#bouton-publier');
const champNom = document.querySelector('#nom');
const champCommentaire = document.querySelector('#commentaire');
const messageErreur = document.querySelector('#message-erreur');

// On cache le message d'erreur au départ (maintenant ça marchera !)
messageErreur.style.display = "none";

// 2. ÉCOUTE DU CLIC
boutonPublier.addEventListener('click', function() {
    
    const valeurNom = champNom.value.trim();
    const valeurCommentaire = champCommentaire.value.trim();

    // 3. VALIDATION
    if (valeurNom.length < 2 || valeurCommentaire.length < 10) {
        
        let texteErreur = "";
        
        if (valeurNom.length < 2) {
            texteErreur = "Le nom doit contenir au moins 2 caractères.";
        } else if (valeurCommentaire.length < 10) {
            texteErreur = "Le commentaire doit contenir au moins 10 caractères.";
        }

        messageErreur.textContent = texteErreur;
        messageErreur.style.display = "block";
        return; 
    }

    // Si c'est valide :
    messageErreur.style.display = "none";
    messageErreur.textContent = "";
    
});