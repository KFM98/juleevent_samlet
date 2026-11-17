/* OPSAMLING AF FORMULARDATA */

const params = new URLSearchParams(window.location.search);

const navn = params.get("navn");
const opgaver = params.getAll("opgave");
const datoer = params.getAll("tidspunkt");

const visNavn = document.querySelector("#vis-navn");
const visOpgave = document.querySelector("#vis-opgave");
const visDato = document.querySelector("#vis-dato");

if (visNavn && visOpgave && visDato) {
  visNavn.textContent = navn || "Ikke angivet";

  visOpgave.textContent = opgaver.length > 0 ? opgaver.join(", ") : "Ingen opgave valgt";

  visDato.textContent = datoer.length > 0 ? datoer.join(", ") : "Ingen dato valgt";
}
