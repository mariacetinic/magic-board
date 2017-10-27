var nrOfSquares = 8;
var contentDiv = document.getElementById('content');//hämtar content diver

createBoard();

function createBoard() {
    // skapar ett nytt element
    var board = document.createElement('div');
    //sätter klassnamnet board på diven
    board.className = 'board';


    //y för att det är y-led
    // var y, skapar en ny variabel, riskerar att inte skriva över

    for (var y=0; y < nrOfSquares; y++) {
        //kallar på funktionen med foor loopen
        //addRowToBoard(); //returnerar row

        var row = addRowToBoard(board); //hämtar ur värdet ur board, behöber inte heta board, 
        
        for (var x = 0; x < nrOfSquares; x++ ){
            addSquareToRow(x, y, row);
        }
    }

    //if y är ojämnt så skriver den ut en färg
//i 

// lägger till diven med classen board i diven content (det sista vi gör, ger bättre prestanda). 
//  Det är prestandakrävande att göra uppdateringar - Varje ändringar vi gör till domen kräver prestanda
// Alltså skapa trädet först, sen skriva ut
contentDiv.appendChild(board);
}

function addRowToBoard(board) { // tar emot board, det är en variabel
    
    /*create row */
    var row = document.createElement('div');
    row.className = 'row';

    /*Set background */

    board.appendChild(row);
    return row; /* returnerar row */

}


function addSquareToRow(x, y, row){
    var square = document.createElement('div');
    square.className = 'square';
    
    if((x+y) % 2) {
        square.style.backgroundColor = 'purple';
    } else {
        square.style.backgroundColor = 'green';
    }

    row.appendChild(square);
}

function myAnimation(row) {
    //vid klick på knapp ändras texten till stop
    document.getElementById("change").innerHTML = "Stop";
    //vid klick på knapp ska 

    document.getElementsByClassName("row").style.transform = "rotate(7deg)";
}


