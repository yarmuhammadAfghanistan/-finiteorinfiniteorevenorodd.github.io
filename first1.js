function printEvenOrOdd() {
    let type = prompt("What do you want to print? Type 'even' or 'odd':");
    if (type === null) {
        return; // User clicked cancel
    }
    type = type.toLowerCase();
    if (type !== 'even' && type !== 'odd') {
        alert("Invalid choice!");
        return;
    }
    let range = prompt("How many " + type + " numbers do you want to print?");
    if (range === null) {
        return; // User clicked cancel
    }
    range = parseInt(range);
    if (isNaN(range) || range <= 0) {
        alert("Invalid range!");
        return;
    }
    printNumbers(type, range);
}

function printNumbers(type, range) {
    let output = "";
    for (let i = 1; i <= range; i++) {
        if ((type === 'even' && i % 2 === 0) || (type === 'odd' && i % 2 !== 0)) {
            output += i + " ";
        }
    }
    alert("The " + type + " numbers within the range are:\n" + output);
}

function performDivision() {
    let num1 = prompt("Enter the first number:");
    if (num1 === null) {
        return; // User clicked cancel
    }
    num1 = parseFloat(num1);
    if (isNaN(num1)) {
        alert("Invalid number!");
        return;
    }
    let num2 = prompt("Enter the second number:");
    if (num2 === null) {
        return; // User clicked cancel
    }
    num2 = parseFloat(num2);
    if (isNaN(num2)) {
        alert("Invalid number!");
        return;
    }
    if (num2 === 0) {
        alert("Division by zero is not possible!");
    } else {
        let result = num1 / num2;
        if (isFinite(result)) {
            alert("The result of the division is: " + result);
        } else {
            alert("Division is not possible due to infinite value.");
        }
    }
}