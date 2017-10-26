var nrOfSquares = 8;

//hämtar content diver
var contentDiv = document.getElementById('content');

// skapar ett nytt element
var board = document.createElement('div');
//sätter klassnamnet board på diven
board.className = 'board';


//y för att det är y-led
// var y, skapar en ny variabel, riskerar att inte skriva över

for (var y=0; y < nrOfSquares; y++) {
    //kallar på funktionen med foor loopen
    //addRowToBoard(); //returnerar row

    var row = addRowToBoard();
    
    for (var x = 0; x < nrOfSquares; x++ ){
        var square = document.createElement('div');
        square.className = 'square';
        row.appendChild(square);

        
        if((x+y) % 2) {
            square.style.backgroundColor = 'purple';
        } else {
            square.style.backgroundColor = 'green';
        }

    }

  
}


//if y är ojämnt så skriver den ut en färg
//i 

// lägger till diven med classen board i diven content (det sista vi gör, ger bättre prestanda). 
//  Det är prestandakrävande att göra uppdateringar - Varje ändringar vi gör till domen kräver prestanda
// Alltså skapa trädet först, sen skriva ut
contentDiv.appendChild(board);

function addRowToBoard() {
    

    /*create row */
    var row = document.createElement('div');
    row.className = 'row';

    /*Set background */
    if(y%2){
        row.style.backgroundColor = 'black';
    } else {
        row.style.backgroundColor = 'white';
    }

    board.appendChild(row);
    return row; /* returnerar row */

}



