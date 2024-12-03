const emailAutorizzate = ["firstemail@example.com","secondemail@example.com","thirdemail@example.com"];

// Chiedi l'email all'utente
const emailUtente = prompt("Inserisci la tua email:");

// Variabile per capire se l'email è trovata
let accessoConsentito = false;

// Controlla se l'email è nella lista
for (let i = 0; i < emailAutorizzate.length; i++) {
    if (emailAutorizzate[i] === emailUtente) {
        accessoConsentito = true;
    }
}

// Stampa il messaggio
if (accessoConsentito) {
    console.log("Accesso consentito");
} else {
    console.log("Accesso negato");
}