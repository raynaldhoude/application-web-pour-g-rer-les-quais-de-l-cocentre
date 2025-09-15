// Fonction qui change la couleur du carré au clic
function changeColor(square) {
    // Récupérer la couleur actuelle du carré
    const currentColor = square.style.backgroundColor;

    // Changer la couleur en fonction de la couleur actuelle
    if (currentColor === 'green') {
        square.style.backgroundColor = 'yellow'; 
    } else if (currentColor === 'yellow') {
        square.style.backgroundColor = 'red';  
    } else if (currentColor === 'red') {
        square.style.backgroundColor = 'green';
    } else {
        square.style.backgroundColor = 'green';
    }

  

}
