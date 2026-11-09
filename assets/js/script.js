// ==========================================================================
// 1. SÉLECTION DES ÉLÉMENTS
// ==========================================================================
const formulaire = document.querySelector('#formulaire-commentaire'); // AJOUTÉ
const boutonPublier = document.querySelector('#bouton-publier');
const champNom = document.querySelector('#nom');
const champCommentaire = document.querySelector('#commentaire');
const messageErreur = document.querySelector('#message-erreur');
const listeCommentaires = document.querySelector('#liste-commentaires');

messageErreur.style.display = "none";

// ==========================================================================
// 2. ÉCOUTE DU CLIC ET VALIDATION
// ==========================================================================
boutonPublier.addEventListener('click', function() {
    
    const valeurNom = champNom.value.trim();
    const valeurCommentaire = champCommentaire.value.trim();

    // Validation
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

    messageErreur.style.display = "none";
    messageErreur.textContent = "";

    // ======================================================================
    // 3. CRÉATION DYNAMIQUE DU COMMENTAIRE
    // ======================================================================
    
    // A. La carte
    const carteCommentaire = document.createElement('div');
    carteCommentaire.className = 'carte-commentaire';

    // B. Le nom
    const elementNom = document.createElement('p');
    elementNom.className = 'nom-auteur';
    elementNom.textContent = valeurNom;

    // C. Le texte
    const elementTexte = document.createElement('p');
    elementTexte.className = 'texte-commentaire';
    elementTexte.textContent = valeurCommentaire;

    // D. Le bouton supprimer
    const boutonSupprimer = document.createElement('button');
    boutonSupprimer.className = 'bouton-supprimer';
    boutonSupprimer.textContent = '🗑️ Supprimer';

    // E. On assemble
    carteCommentaire.appendChild(elementNom);
    carteCommentaire.appendChild(elementTexte);
    carteCommentaire.appendChild(boutonSupprimer);

    // F. On ajoute à la liste
    listeCommentaires.appendChild(carteCommentaire);

    // G. On vide le formulaire
    formulaire.reset(); 
});