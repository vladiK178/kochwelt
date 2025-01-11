let croissants = [1, 250, 50, 500, 1, 42, 2, 0.2];
let sandwich = [4, 12, 12, 4, 2, 8, 100, 1, 12];
let toast = [2, 4, 1, 4, 1, 2];
let salat = [4, 1, 1, 1, 500, 2, 200, 1, 125, 1];

// https://www.chefkoch.de/rezepte/1409011245744466/Uebernachtsalat.html

function rechne_positionen(rezept, init) {
  let menge = 0;
  if (init == true) {
    menge = rezept[0];
    document.getElementById("portionen").value = menge;
  } else {
    menge = document.getElementById("portionen").value;
  }

  if (menge <= 0) {
    menge = rezept[0];
    document.getElementById("portionen").value = menge;
  }

  if (menge >= 20) {
    menge = 20;
    document.getElementById("portionen").value = menge;
  }

  for (let index = 1; index < rezept.length; index++) {
    let id = "pos-" + index;
    document.getElementById(id).innerHTML = parseFloat(
      ((rezept[index] / rezept[0]) * menge).toFixed(3)
    );
  }
}
