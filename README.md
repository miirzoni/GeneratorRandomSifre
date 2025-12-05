# Generisanje i Spremanje Šifri u Node.js

Ovaj projekt je jednostavan Node.js skript koji generiše **sigurne lozinke**, provjerava njihovu jačinu, miješa ih i sprema u tekstualnu datoteku. Idealno za generisanje privremenih lozinki ili testiranje sigurnosnih sistema.

---

## Funkcionalnosti

1. Generisanje lozinki sa kombinacijom:
    - Velikih i malih slova (A-Z, a-z)
    - Brojeva (0-9)
    - Specijalnih znakova (`!@#$%^&*()`)

2. Provjera jačine lozinke (`checkPasswordStrength`)
    - Snažna lozinka 
    - Slaba lozinka (nedostaju neki elementi)

3. Generisanje više lozinki odjednom (`generateMultiplePasswords`)
    - Svaka nova lozinka se dodaje u `sifre.txt`

4. Miješanje lozinke (`shufflePassword`)
    - Svaka lozinka se nasumično permutuje prije spremanja

5. Spremanje lozinki u tekstualnu datoteku `sifre.txt`
    - Ako datoteka već postoji, nove lozinke se dodaju na kraj (append mode)

6. Prikaz generisanih lozinki i njihove jačine u konzoli

---

## Korišteni Node.js moduli i metode

### `fs.writeFileSync(path, data, options)`
- Dio Node.js `fs` modula.
- Služi za **sinhrono pisanje podataka u fajl**.
- Parametri:
    - `path` – putanja do fajla (`"sifre.txt"`)
    - `data` – podaci koje želimo zapisati (`password + "\n"`)
    - `options` – dodatne opcije, `{ flag: "a" }` znači dodavanje na kraj fajla

### `Math.random()`
- Generiše **pseudo-slučajan broj između 0 i 1**.
- Koristi se za biranje nasumičnih znakova iz niza.

### `Math.floor()`
- Zaokružuje decimalni broj **na najbliži manji cijeli broj**.

### `String.charAt(index)`
- Vraća znak na određenoj poziciji `index` unutar stringa.

---

## Funkcije u skriptu

### `generatePassword(length = 10)`
- Parametar `length` određuje dužinu lozinke (default: 10).
- Generiše nasumičnu lozinku koristeći definisani skup znakova.
- Vraća generisanu lozinku kao string.

### `checkPasswordStrength(password)`
- Provjerava da li lozinka sadrži:
    - Veliko slovo
    - Malo slovo
    - Broj
    - Specijalni znak
- Vraća status jačine lozinke.

### `shufflePassword(password)`
- Nasumično miješa znakove lozinke.
- Vraća novu permutovanu lozinku.

### `generateMultiplePasswords(count = 5, length = 16)`
- Generiše više lozinki odjednom.
- Svaka lozinka se miješa (`shufflePassword`) i sprema u `sifre.txt`.
- Ispisuje lozinku i njenu jačinu u konzolu.

### `main()`
- Poziva `generateMultiplePasswords(5, 16)` za generisanje 5 lozinki po 16 karaktera.

---

## Kako koristiti

1. Klonirajte repo ili preuzmite `index.js`.
2. Pokrenite skript u terminalu:

```bash
node index.js
