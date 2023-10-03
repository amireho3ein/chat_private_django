console.log("Sanity check from index.js.");

// focus 'roomInput' when user opens the page
document.getElementById("roomInput").focus();

// submit if the user presses the enter key
document.getElementById("roomInput").onkeyup = function(e) {
    if (e.key === "Enter") {
        document.getElementById("roomConnect").click();
    }
};

// redirect to '/room/<roomInput>/'
document.getElementById("roomConnect").onclick = function() {
    let roomName = document.getElementById("roomInput").value;
    window.location.pathname = "chat/" + roomName + "/";
}

// redirect to '/room/<roomSelect>/'
document.getElementById("roomSelect").onchange = function() {
    let roomName = document.getElementById("roomSelect").value.split(" (")[0];
    window.location.pathname = "chat/" + roomName + "/";
}