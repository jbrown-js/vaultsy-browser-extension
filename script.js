function generatePassword() {
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var numberChars = '0123456789';
    var symbolChars = '!@#$%^&*()';
    var allChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;
    var password = ''; 

    for (var i = 0; i < 18; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex]; // Add random character to password
    }

    document.getElementById('password').value = password;
}

document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('generate-btn')
        .addEventListener('click', generatePassword);
});