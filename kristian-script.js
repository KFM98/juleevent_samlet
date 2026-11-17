// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (svgPlaceholder) {
  document.querySelector("#punkt1").addEventListener("toggle", opdaterFigur);

  document.querySelector("#punkt2").addEventListener("toggle", opdaterFigur);

  document.querySelector("#punkt3").addEventListener("toggle", opdaterFigur);

  function opdaterFigur() {
    const aabent = document.querySelector(".accordion-item[open]");

    if (aabent) {
      svgPlaceholder.dataset.position = aabent.dataset.position;
    } else {
      svgPlaceholder.dataset.position = "start";
    }
  }
  opdaterFigur();
}

const alleDage = document.querySelector("#alle-dage");
const datoer = document.querySelectorAll('input[name="dato"]');

if (alleDage) {
  alleDage.addEventListener("change", () => {
    datoer.forEach((dato) => {
      dato.checked = alleDage.checked;
    });
  });

  datoer.forEach((dato) => {
    dato.addEventListener("change", () => {
      alleDage.checked = [...datoer].every((dato) => dato.checked);
    });
  });
}
