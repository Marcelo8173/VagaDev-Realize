
function sendForm(){
    //that's the main function
    let numberOfcolumns = document.querySelector("#columns");
    let numberOflines = document.querySelector("#lines");

    if(numberOflines.value >=0 & numberOfcolumns.value>=0){
        //validation if the numbers are positive or negative
        createLayout(numberOflines.value, numberOfcolumns.value);
        restartAplication(numberOflines , numberOfcolumns);
        return;
    }

    alert('Os números precisam ser positivos');

}


function createLayout(numberOflines , numberOfcolumns){
    //function responsible for dividing the layout dynamically
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


function restartAplication(numberOflines , numberOfcolumns){
    //this function ensures that the numbers are reset after a run cycle
    numberOfcolumns.value = 0; 
    numberOflines.value = 0;
}

