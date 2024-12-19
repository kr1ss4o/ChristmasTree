let length = [1, 3, 5 ,3, 7, 9, 5, 7, 9, 5, 7, 1]; // How many letters on a single row
let letter = ["В", "Е", "С", "Е", "Л", "А", "К", "О", "Л", "Е", "Д", "А"]; // Fixed letters for every middle textbox in each row

function CreateTreePart() { // Create the tree parts (rows)
    CreateRowDiv(); // Call function

    let row = 1;
    for (let i = 0; i < 12; i++) { // Go through every single row and add create textboxes
        let created = 1;
        while (created <= length[i]) { // Create as many textboxes as the array says
            const textbox = document.createElement("input");
            if (Math.ceil(length[i] / 2) == created) { // Only the middle textboxes of each row have a different design and fixed letter
                textbox.className = "word";
                textbox.value = letter[i];
            }
            if (row == 12) textbox.className = "stem"; // Add custom design for the last single textbox on row 12
            const element = document.getElementById("row"+row);
            element.appendChild(textbox);
            created++;
        }
        row++;
    }
}

function ReadOnly() {
    for (let i = 1; i <= 12; i++) {
        const inputs = document.querySelectorAll('#row'+i+' input'); // NodeList of inputs
        inputs.forEach(input => {
        input.readOnly = true; // Apply the readonly property
    });
    }
}
function CreateRowDiv() { // Create 12 divs for the 12 tree rows
    for (let i = 1; i <= 12; i++) { // Create exactly 12 divs
        const divider = document.createElement("div"+i);
        divider.id = "row"+i;
        divider.className = "row"
        const element = document.getElementById("tree");
        element.appendChild(divider); 
    }
}

CreateTreePart(); // Call function
ReadOnly();