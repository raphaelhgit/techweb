# Projet JavaScript – Interaction DOM

Ce projet est un exemple moderne d'interaction entre **HTML5**, **CSS3** et **JavaScript ES2024**.  
Il permet :
- d'afficher un texte différent selon le bouton cliqué
- d'inverser l'ordre des mots saisis par l'utilisateur
- de comprendre les bases des événements, fonctions et manipulations du DOM

---

## Structure du projet

```
.
├── index.html      # Structure de la page (HTML5 sémantique)
├── style.css       # Mise en forme (CSS3 moderne)
├── func.js         # Logique JavaScript (ES2024)
├── download.png    # Image affichée dans la page
└── README.md       # Documentation
```

---

## Fonctionnalités

### 1. Boutons interactifs

Trois boutons permettent d'afficher un texte spécifique dans la page :

- **Bouton 1** → "Texte pour le bouton 1"
- **Bouton 2** → "Texte pour le bouton 2"
- **Bouton 3** → "Texte pour le bouton 3"

Le texte s'affiche dynamiquement dans l'élément `<p id="output">`.

### 2. Inversion de mots

L'utilisateur peut :
1. Saisir du texte dans un champ `<input>`
2. Cliquer sur le bouton **Inverser les mots**
3. Voir le texte inversé mot par mot

**Exemple :**
```
bonjour le monde → monde le bonjour
```

---

## Technologies utilisées

- **HTML5** : structure sémantique avec `<main>`, `<section>`, `<article>`
- **CSS3** : flexbox, grid, variables CSS, media queries
- **JavaScript ES2024** : fonctions fléchées, optional chaining (`?.`), nullish coalescing (`??`), destructuration, async/await

Aucune librairie externe n'est utilisée.

---

## Concepts clés

- **DOMContentLoaded** : attend le chargement complet du HTML avant l'exécution du code
- **Event delegation** : gestion efficace des événements
- **Fonctions fléchées** (`=>`): syntaxe concise et gestion du contexte `this`
- **Optional chaining** (`?.`) : accès sécurisé aux propriétés
- **Nullish coalescing** (`??`) : gestion des valeurs null/undefined

