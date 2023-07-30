let charcount = 0; // Initialize charcount to 0

// Initialize screen content to an empty string
let screenContent = '';
document.getElementById("screen").textContent = screenContent;

// Function to update charcount and screen content
function updateScreen(content) {
    charcount = content.length;
    document.getElementById("screen").textContent = content;
    screenContent = content; // Update the screenContent variable with the new content
}

// Function to handle number button clicks
for (let i = 0; i <= 9; i++) {
    const button = document.getElementById(i.toString());
    button.onclick = function() {
        if (charcount < (isPhone() ? 11 : 15)) { // Check if the charcount is less than 11 for phones, 15 otherwise
            updateScreen(screenContent + i.toString());
        }
    };
}

// Function to handle delete button click
document.getElementsByClassName("delete")[0].onclick = function() {
    if (isResult || screenContent === 'Error') {
        // If the current content is a result or "Error", delete the entire string
        updateScreen('');
        isResult = false; // Reset the flag to false since the screen is empty now
    } else {
        // If the current content is user input, remove the last character from the screen
        if (screenContent.length > 0) {
            updateScreen(screenContent.slice(0, -1));
        }
    }
};

// Function to handle operator button clicks
document.getElementById("+").onclick = function() {
    if (charcount < (isPhone() ? 11 : 15)) { // Check if the charcount is less than 11 for phones, 15 otherwise
        updateScreen(screenContent + '+');
    }
};

document.getElementById("-").onclick = function() {
    if (charcount < (isPhone() ? 11 : 15)) { // Check if the charcount is less than 11 for phones, 15 otherwise
        updateScreen(screenContent + '-');
    }
};

document.getElementById("*").onclick = function() {
    if (charcount < (isPhone() ? 11 : 15)) { // Check if the charcount is less than 11 for phones, 15 otherwise
        updateScreen(screenContent + '×');
    }
};

document.getElementById("/").onclick = function() {
    if (charcount < (isPhone() ? 11 : 15)) { // Check if the charcount is less than 11 for phones, 15 otherwise
        updateScreen(screenContent + '÷');
    }
};

document.getElementById("(").onclick = function() {
    if (charcount < (isPhone() ? 11 : 15)) { // Check if the charcount is less than 11 for phones, 15 otherwise
        updateScreen(screenContent + '(');
    }
};

document.getElementById(")").onclick = function() {
    if (charcount < (isPhone() ? 11 : 15)) { // Check if the charcount is less than 11 for phones, 15 otherwise
        updateScreen(screenContent + ')');
    }
};

let isResult = false; // Initialize the flag as false

// Function to handle equal button click
document.getElementById("equal").onclick = function() {
    let expression = screenContent;

    // Replace '×' with '*' and '÷' with '/'
    expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

    function calculate(expression) {
        try {
            const result = eval(expression);

            // Round the result to 15 digits after the decimal point
            const roundedResult = parseFloat(result.toFixed(15));

            // Convert the rounded result to a string with 15 digits
            let resultString = roundedResult.toString();

            // If the result has more than 15 characters, trim it to 15 characters
            if (resultString.length > 15) {
                resultString = resultString.slice(0, 15);
            }

            isResult = true; // Set the flag to true since this is a result
            return resultString;
        } catch (error) {
            // Handle any errors that might occur during evaluation
            console.error('Error while evaluating expression:', error);
            isResult = false; // Set the flag to false since this is not a result
            return 'Error';
        }
    }

    // Update the screen with the calculated result
    updateScreen(calculate(expression));
};

// Function to check if the device is a phone based on the screen width
function isPhone() {
    return window.matchMedia("(max-width: 600px)").matches;
}
