// 1 : Aléatoire
const coinResultat = Math.floor(Math.random() * 2);

// 2 : Les valeurs sont asignés par des images
const coinImages = {
    0: './pile.png', // Chemin local pour l'image de "Pile"
    1: './face.png', // Chemin local pour l'image de "Face"
};

// 3 : Mise à jour du texte et de l'image selon le résultat
const resultatTexte = coinResultat === 0 ? 'Pile' : 'Face';

// 4 : Met à jour le texte du résultat
document.getElementById('resultat_texte').innerText = `Vous avez obtenu un ${resultatTexte}!`;

// 5: Met à jour l'image affichée
document.getElementById('coin_image').src = coinImages[coinResultat];
