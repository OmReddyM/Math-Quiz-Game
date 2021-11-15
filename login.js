function submit() {
    Username1 = document.getElementById("Username1").value;
    Username2 = document.getElementById("Username2").value;

    localStorage.setItem("Player1", Username1);
    localStorage.setItem("Player2", Username2);

    window.location = "game.html";
}