// Fonction qui change la couleur du carré au clic simple
function changeColor(square) {
    // Récupérer la couleur actuelle du carré
    const currentColor = square.style.backgroundColor;

    // Changer la couleur en fonction de la couleur actuelle
    if (currentColor === 'green') {
        square.style.backgroundColor = 'yellow'; 
        square.style.color = 'black';
    } else if (currentColor === 'yellow') {
        square.style.backgroundColor = 'red';  
        square.style.color = 'black';
         } else if (currentColor === 'red') {
        square.style.backgroundColor = 'green';
         square.style.color = 'black';
    } else {
        square.style.backgroundColor = 'green';
    }

  

}
