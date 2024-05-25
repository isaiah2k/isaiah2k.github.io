const h2 = document.createElement("h2");
h2.textContent = "This content was made by ZAY";
document.querySelector("body").appendChild(h2);
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
