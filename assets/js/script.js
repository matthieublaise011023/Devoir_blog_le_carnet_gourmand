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
// 2. FONCTION D'AJOUT D'UN COMMENTAIRE (Factorisation)
// ==========================================================================
// Cette fonction prend un nom et un texte, et crée la carte.
// On l'utilise pour l'ajout via le formulaire ET pour l'initialisation.
function ajouterCommentaire(nom, texte) {
    const carteCommentaire = document.createElement('div');
    carteCommentaire.className = 'carte-commentaire';

    const elementNom = document.createElement('p');
    elementNom.className = 'nom-auteur';
    elementNom.textContent = nom;

    const elementTexte = document.createElement('p');
    elementTexte.className = 'texte-commentaire';
    elementTexte.textContent = texte;

    const boutonSupprimer = document.createElement('button');
    boutonSupprimer.className = 'bouton-supprimer';
    boutonSupprimer.textContent = '🗑️ Supprimer';

    // Écoute de la suppression
    boutonSupprimer.addEventListener('click', function() {
        this.parentElement.remove(); 
    });

    // Assemblage
    carteCommentaire.appendChild(elementNom);
    carteCommentaire.appendChild(elementTexte);
    carteCommentaire.appendChild(boutonSupprimer);

    // Ajout à la liste
    listeCommentaires.appendChild(carteCommentaire);
}

// ==========================================================================
// 3. ÉCOUTE DU CLIC ET VALIDATION
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

    // Appel de la fonction d'ajout
    ajouterCommentaire(valeurNom, valeurCommentaire);

    // On vide le formulaire
    formulaire.reset(); 
});

// ==========================================================================
// 4. INITIALISATION AVEC LES COMMENTAIRES DE LA MAQUETTE
// ==========================================================================
// On appelle la fonction au chargement du script pour afficher
// les deux commentaires d'exemple de la maquette.
ajouterCommentaire('Téo', 'Superbe recette !');
ajouterCommentaire('Léa', 'Test de commentaire');