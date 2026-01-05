# Projet JavaScript – Interaction DOM

Ce projet est un exemple simple d’interaction entre **HTML**, **CSS** et **JavaScript**.  
Il permet :
- d’afficher un texte différent selon le bouton cliqué
- d’inverser l’ordre des mots saisis par l’utilisateur
- de comprendre les bases des événements, fonctions et manipulations du DOM

---

## Structure du projet


├── index.html # Structure de la page

├── style.css # Mise en forme (CSS)

├── func.js # Logique JavaScript

├── download.png # Image affichée dans la page

└── README.md

---

## Fonctionnalités

### 1. Boutons interactifs
Trois boutons permettent d’afficher un texte spécifique dans la page.

- Bouton 1 → “Texte pour le bouton 1”
- Bouton 2 → “Texte pour le bouton 2”
- Bouton 3 → “Texte pour le bouton 3”

Le texte est affiché dynamiquement dans l’élément `<p id="output">`.

---

### 2. Inversion de mots
L’utilisateur peut :
1. Saisir du texte dans un champ `<input>`
2. Cliquer sur **Inverser les mots**
3. Voir le texte inversé mot par mot

Exemple :


bonjour le monde
→ monde le bonjour

---

## Technologies utilisées

- **HTML5** : structure de la page
- **CSS3** : mise en forme et style
- **JavaScript (ES2020)** :
  - fonctions
  - événements (`addEventListener`)
  - manipulation du DOM
  - fonctions fléchées (`=>`)
  - chaînage optionnel (`?.`)

Aucune librairie externe n’est utilisée.

---

## Points techniques importants

### DOMContentLoaded
Le code JavaScript attend que le HTML soit entièrement chargé avant de s’exécuter, afin d’éviter les erreurs liées aux éléments inexistants.

### Fonctions fléchées (`=>`)
Utilisées pour :
- une syntaxe plus concise
- éviter les problèmes liés à `this`

### Optional chaining (`?.`)
Permet d’ajouter des écouteurs d’événements sans provoquer d’erreur si un élément HTML est absent.

