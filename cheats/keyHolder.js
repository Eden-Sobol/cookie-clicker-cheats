cookies = prompt("How many held cookies?");keybind = prompt("What keybind?");window.addEventListener("keydown", function(e) {if (e.key == keybind) {Game.cookies += Number(cookies)}})
