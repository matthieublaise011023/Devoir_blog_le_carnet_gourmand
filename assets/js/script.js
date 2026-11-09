// ==========================================================================
// 1. SÉLECTION DES ÉLÉMENTS
// ==========================================================================
const formulaire = document.querySelector('#formulaire-commentaire');
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
    
    const carteCommentaire = document.createElement('div');
    carteCommentaire.className = 'carte-commentaire';

    const elementNom = document.createElement('p');
    elementNom.className = 'nom-auteur';
    elementNom.textContent = valeurNom;

    const elementTexte = document.createElement('p');
    elementTexte.className = 'texte-commentaire';
    elementTexte.textContent = valeurCommentaire;

    const boutonSupprimer = document.createElement('button');
    boutonSupprimer.className = 'bouton-supprimer';
    boutonSupprimer.textContent = '🗑️ Supprimer';

    // ======================================================================
    // 4. SUPPRESSION DU COMMENTAIRE (Étape 5)
    // ======================================================================
    // On ajoute l'écoute sur le bouton supprimer
    boutonSupprimer.addEventListener('click', function() {
        // 'this' fait référence au bouton cliqué. 
        // this.parentElement cible la div '.carte-commentaire' qui l'entoure.
        // La méthode remove() détruit cet élément et tout son contenu.
        this.parentElement.remove(); 
    });

    // ======================================================================
    // 5. ASSEMBLAGE ET AJOUT À LA LISTE
    // ======================================================================
    carteCommentaire.appendChild(elementNom);
    carteCommentaire.appendChild(elementTexte);
    carteCommentaire.appendChild(boutonSupprimer);

    listeCommentaires.appendChild(carteCommentaire);

    // On vide le formulaire
    formulaire.reset(); 
});