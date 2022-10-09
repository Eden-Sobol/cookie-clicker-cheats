lumps = prompt("How many held lumps?");keybind = prompt("What keybind?");window.addEventListener("keydown", function(e) {if (e.key == keybind) {Game.lumps += Number(lumps)}})
