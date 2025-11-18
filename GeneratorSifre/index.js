const fs = require("fs");

function generatePassword(length = 10) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = "";

    for (let i = 0; i < length; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return pass;
}

function main() {
    const password = generatePassword(16);
    fs.writeFileSync("sifre.txt", password + "\n", { flag: "a" });
    console.log("Generisana šifra:", password);
    console.log("Šifra uspješno spremljena u sifre.txt");
}

main();
