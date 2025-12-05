# Generisanje i Spremanje Šifri u Node.js

Ovaj projekt je jednostavan Node.js skript koji generiše sigurnu šifru i sprema je u tekstualnu datoteku. Idealno za generisanje privremenih lozinki ili testiranje sigurnosnih sistema.

---

## Funkcionalnosti

1. Generisanje šifre sa kombinacijom:
   - Velikih i malih slova (A-Z, a-z)
   - Brojeva (0-9)
   - Specijalnih znakova (`!@#$%^&*()`)

2. Spremanje generisane šifre u tekstualnu datoteku `sifre.txt`.  
   - Ako datoteka već postoji, nova šifra se dodaje na kraj (`append mode`).

3. Prikaz generisane šifre u konzoli.

---

## Korištene metode i funkcije

### `fs.writeFileSync(path, data, options)`

- Dio Node.js `fs` modula.
- Služi za **sinhrono pisanje podataka u fajl**.
- Parametri:
  - `path` – putanja do fajla (`"sifre.txt"`).
  - `data` – podaci koje želimo zapisati (`password + "\n"`).
  - `options` – dodatne opcije, u našem slučaju `{ flag: "a" }` što znači dodavanje na kraj fajla.
  
### `Math.random()`

- Generiše **pseudo-slučajan broj između 0 (uključivo) i 1 (isključivo)**.
- Koristi se za biranje nasumičnih znakova iz stringa.

### `Math.floor()`

- Zaokružuje decimalni broj **na najbliži manji cijeli broj**.
- Koristi se da se `Math.random() * chars.length` pretvori u validni indeks stringa.

### `String.charAt(index)`

- Vraća znak na određenoj poziciji `index` unutar stringa.
- Koristi se za biranje nasumičnog znaka iz niza `chars`.

---

## Funkcije u skriptu

### `generatePassword(length = 12)`

- Parametar `length` određuje dužinu šifre (default: 12).
- Generiše šifru koristeći znakove iz definisanog niza.
- Vraća generisanu šifru kao string.

### `main()`

- Generiše šifru dužine 16 pozivom `generatePassword(16)`.
- Sprema šifru u `sifre.txt`.
- Ispisuje poruke u konzolu o uspješnosti operacije.

---

## Kako koristiti

1. Klonirajte repo ili preuzmite `index.js`.
2. Pokrenite skript u terminalu:

```bash
node index.js
