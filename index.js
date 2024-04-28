window.onload = function() {
    // Get reference to the Yes button
    var yesButton = document.getElementById("yes");

    // Add click event listener to the Yes button
    yesButton.addEventListener("click", function() {
        // Get reference to the h1 element
        var h1Element = document.querySelector("#Hong h1");

        // Change the text content of h1 element
        h1Element.textContent = "Yes o sl bong";
    });
};
const texts = ["I love you", "My", "Universe"]; // Add your array of texts here
let currentIndex = 0;
const box = document.getElementById("box");

function changeTextAnimation() {
    box.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
    box.style.animation = "changeText 5s";
    setTimeout(() => {
        box.style.animation = "";
    }, 5000);
}

// Automatically trigger the animation every 10 seconds
setInterval(changeTextAnimation, 10000);