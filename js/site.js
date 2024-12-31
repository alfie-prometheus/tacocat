function cleanString(input) {
    return input.toLowerCase().replace(/[^a-z]/g, ''); // convert to lowercase and remove non-alphabetic characters
}

function getInput() {
    let inputWord = document.getElementById("inputWord").value;
    return cleanString(inputWord);
}

function tacoCat(inputWord) {
    if (!inputWord) {
        console.log("You must provide an input.");
        return;  // Make sure to exit the function if there's no input
    }

    const letters = inputWord.split("");
    const n = letters.length;
    let isPalindrome = true;

    for (let i = 0; i <= n / 2; i++) {
        if (letters[i] !== letters[n - i - 1]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        displayResult("<strong>Success! </strong><span class='red-text'>" + inputWord + "</span> is a Palindrome!");
    } else {
        displayResult("<span class='red-text'>" + inputWord + "</span> is not a Palindrome.");
    }
}

function displayResult(message) {
    document.getElementById("result").innerHTML = message;
}

document.getElementById('inputSubmit').addEventListener('click', function () {
    const input = getInput();
    tacoCat(input);
});
