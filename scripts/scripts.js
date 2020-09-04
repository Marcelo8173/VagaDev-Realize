
function sendForm(){
    let numberOfcolumns = document.querySelector("#columns");
    let numberOflines = document.querySelector("#lines");

    createLayout(numberOflines.value, numberOfcolumns.value);

}


function createLayout(numberOflines , numberOfcolumns){

    var tableContainer = document.querySelector(".container");
    let elementRow = [];
    let elementoColumn = [];

    for (let i = 0; i < numberOflines; i++) {
        elementRow[i] = document.createElement("tr");
        tableContainer.appendChild( elementRow[i]);
        
        for (let j = 0; j < numberOfcolumns; j++) {
            elementoColumn[j] = document.createElement('td');
            elementoColumn[j].className = "color";
            elementRow[i].appendChild(elementoColumn[j]);
        }

    }

}




