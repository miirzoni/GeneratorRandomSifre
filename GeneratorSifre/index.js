const fs = require("fs");

function generatePassword(length = 10) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = "";

    for (let i = 0; i < length; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return pass;
}

function checkPasswordStrength(password) {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()]/.test(password);

    if (hasUpper && hasLower && hasNumber && hasSpecial) {
        return "Snažna lozinka";
    } else {
        return "Slaba lozinka (nedostaju neki elementi)";
    }
}

function generateMultiplePasswords(count = 5, length = 16) {
    const passwords = [];
    for (let i = 0; i < count; i++) {
        let password = generatePassword(length);
        password = shufflePassword(password);
        passwords.push(password);
        fs.writeFileSync("sifre.txt", password + "\n", { flag: "a" });
        console.log("Generisana šifra:", password);
        console.log(checkPasswordStrength(password));
        console.log("-----------------------------");
    }
    return passwords;
}

function shufflePassword(password) {
    const arr = password.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function main() {
    generateMultiplePasswords(5, 16);
}

main();
