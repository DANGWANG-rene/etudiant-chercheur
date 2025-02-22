document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const question = document.getElementById("question").value;
        if (question) {
            alert("Votre question a bien été soumise : " + question);
            form.reset();
        } else {
            alert("Veuillez poser une question avant de soumettre.");
        }
    });
});