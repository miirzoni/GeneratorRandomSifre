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

function main() {
    const password = generatePassword(16);
    fs.writeFileSync("sifre.txt", password + "\n", { flag: "a" });

    console.log("Generisana šifra:", password);
    console.log(checkPasswordStrength(password));
    console.log("Šifra uspješno spremljena u sifre.txt");
}

main();
