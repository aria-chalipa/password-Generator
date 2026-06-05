"use strict";
// Get references to key HTML elements
const passwordInputTag = document.querySelector('#passInput');
const place = document.querySelector('#result');
// Main password generation function
let generatePssword = (char) => {
    // Define character sets for password generation
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const UpperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const LowerLetter = UpperLetter.map(a => a.toLowerCase());
    const character = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "|", "/"];
    let passWord = '';
    let avalableCharacters = [];
    // Get the currently selected radio button (user's password type preference)
    const selectedradio = document.querySelector('input[name="typeOfValue"]:checked');
    // Build the character pool based on user selection
    if ((selectedradio === null || selectedradio === void 0 ? void 0 : selectedradio.value) == 'only-number') {
        avalableCharacters = num.map(n => n.toString());
    }
    else if ((selectedradio === null || selectedradio === void 0 ? void 0 : selectedradio.value) == 'only-character') {
        avalableCharacters = [...UpperLetter, ...LowerLetter];
    }
    else {
        avalableCharacters = [...num.map(n => n.toString()), ...UpperLetter, ...LowerLetter, ...character];
    }
    // Generate the password character by character
    for (let i = 0; i < Number(char); i++) {
        const randomIndex = Math.floor(Math.random() * avalableCharacters.length);
        passWord += avalableCharacters[randomIndex];
    }
    // Display the generated password
    Showresult(passWord);
    return passWord;
};
// Function to display the password in the UI
let Showresult = (result) => {
    const show = document.createElement('p');
    show.className = 'text-base/7 text-lg text-white';
    show.innerText = result;
    place === null || place === void 0 ? void 0 : place.appendChild(show);
};
// Set up the generate button
let btn = document.querySelector('#generateBtn');
// @ts-ignore
btn.addEventListener('click', (e) => {
    e.preventDefault();
    // @ts-ignore
    // Clear previous results
    while ((place === null || place === void 0 ? void 0 : place.children.length) > 0) {
        place === null || place === void 0 ? void 0 : place.children[0].remove();
    }
    // Get the desired password length from the input
    const char = passwordInputTag === null || passwordInputTag === void 0 ? void 0 : passwordInputTag.value;
    if (char !== undefined && char !== "") {
        generatePssword(char);
    }
});
// Function to copy the generated password to clipboard
let CopyFunc = () => {
    const place = document.querySelector('#result');
    if ((place === null || place === void 0 ? void 0 : place.children.length) === 0) {
        alert('there is nothing to copy!');
    }
    else {
        // @ts-ignore
        if ("children" in place) {
            navigator.clipboard.writeText(place.children[0].textContent)
                .then(() => alert("Copied!"))
                .catch(err => console.error(err));
        }
    }
};
