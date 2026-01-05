function displayText(buttonId) {
  const textMap = {
    button1: "France",
    button2: "Allemagne",
    button3: "Italie",
  };
  const textElement = document.getElementById("output");
  if (textElement) {
    textElement.textContent = textMap[buttonId];
  }
}

function reverseWords(text) {
  return text.split(" ").reverse().join(" ");
}

function sortBySize(a, b) {
  return a.length - b.length;
}
function sortWords(text) {
  return text.split(" ").sort(sortBySize).join(" ");
}

function reverseWordsButton(buttontext) {
  const buttons = document.querySelectorAll("button");
  let textButtons = Array();
  for (button of buttons) {
    textButtons.push(button.textContent);
  }
  let i = 0;
  while (i < textButtons.length) {
    buttons[i].textContent = textButtons[textButtons.length - 1 - i];
    i++;
  }
  return textButtons;
}

function distanceDeLevenshtein(chaine1, chaine2) {
  const longueurChaine1 = chaine1.length;
  const longueurChaine2 = chaine2.length;

  // Déclaration du tableau D (matrice)
  const D = [];

  // Initialisation de la matrice
  for (let i = 0; i <= longueurChaine1; i++) {
    D[i] = [];
    D[i][0] = i;
  }

  for (let j = 0; j <= longueurChaine2; j++) {
    D[0][j] = j;
  }

  // Calcul des distances
  for (let i = 1; i <= longueurChaine1; i++) {
    for (let j = 1; j <= longueurChaine2; j++) {
      let coutSubstitution;

      if (chaine1[i - 1] === chaine2[j - 1]) {
        coutSubstitution = 0;
      } else {
        coutSubstitution = 1;
      }

      D[i][j] = Math.min(
        D[i - 1][j] + 1, // suppression
        D[i][j - 1] + 1, // insertion
        D[i - 1][j - 1] + coutSubstitution // substitution
      );
    }
  }

  // Résultat final
  return D[longueurChaine1][longueurChaine2];
}

document.addEventListener("DOMContentLoaded", () => {
  // Boutons displayText
  document
    .getElementById("button1")
    ?.addEventListener("click", () => displayText("button1"));
  document
    .getElementById("button2")
    ?.addEventListener("click", () => displayText("button2"));
  document
    .getElementById("button3")
    ?.addEventListener("click", () => displayText("button3"));
  // Reverse words
  const inputElement = document.getElementById("userInput");
  const reverseButton = document.getElementById("reverseButton");
  reverseButton?.addEventListener("click", () => {
    if (inputElement) {
      inputElement.value = reverseWords(inputElement.value);
    }
  });

  const inputElement2 = document.getElementById("userInput2");
  const triMots = document.getElementById("triMots");
  triMots?.addEventListener("click", () => {
    if (inputElement2) {
      inputElement2.value = sortWords(inputElement2.value);
    }
  });

  const inputA = document.getElementById("userInput3a");
  const inputB = document.getElementById("userInput3b");
  const triLeven = document.getElementById("triLeven");
  const output2 = document.getElementById("output2");
  triLeven?.addEventListener("click", () => {
    if (!(inputA instanceof HTMLInputElement)) return;
    if (!(inputB instanceof HTMLInputElement)) return;
    if (!output2) return;

    const d = distanceDeLevenshtein(inputA.value, inputB.value);
    output2.textContent = String(d);
  });

  document
    .getElementById("reverseButtonButton")
    ?.addEventListener("click", () => reverseWordsButton());
});
