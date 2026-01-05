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

document.addEventListener("DOMContentLoaded", () => {
    // Boutons displayText
    document.getElementById("button1")?.addEventListener("click", () => displayText("button1"));
    document.getElementById("button2")?.addEventListener("click", () => displayText("button2"));
    document.getElementById("button3")?.addEventListener("click", () => displayText("button3"));
    // Reverse words
    const inputElement = document.getElementById("userInput");
    const reverseButton = document.getElementById("reverseButton");
    reverseButton?.addEventListener("click", () => {
        if (inputElement) {
            inputElement.value = reverseWords(inputElement.value);
        }
    });
});
