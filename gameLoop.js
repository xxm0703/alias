function wordButtonClicked(e) {
    if (e.target.style.backgroundColor === "gray") {
        e.target.style.backgroundColor = "";
        players[currentPlayer].addScore(-1);
        document.getElementById("timer").innerHTML = players[currentPlayer].score;
    }
    e.target.style.backgroundColor = "gray";
    players[currentPlayer].addScore(1);
    for (let i = 1; i <= n; i++) {
        if (document.getElementById(i.toString()).style.backgroundColor === "") {
            document.getElementById("timer").innerHTML = players[currentPlayer].score;
            return;
        }
    }
    setWords();
}