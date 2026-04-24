window.addEventListener("load", function () {
    setTimeout(function () {
        alert("Bienvenidos a mi portafolio");
    }, 950);
})

const changeTextBtn = document.getElementById("changeTextBtn");
const textToChange = document.getElementById("textToChange");
changeTextBtn.addEventListener("click", function () {
    textToChange.textContent = "This text has been changed!";
});

const changeColorBtn = document.getElementById("ChangeColorBtn");
changeColorBtn.addEventListener("click", function () {
    textToChange.style.color = "goldenrod";
});