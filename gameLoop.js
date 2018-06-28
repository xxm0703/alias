function wordButtonClicked(e) {
    if (e.target.style.backgroundColor !== "gray") {
        e.target.style.backgroundColor = "gray";
        players[currentPlayer].addScore(1);
    } else {
        e.target.style.backgroundColor = "";
        players[currentPlayer].addScore(-1);
    }
    refresh();
    for (let i = 1; i <= n; i++) {
        if (document.getElementById(i.toString()).style.backgroundColor === "") {
            return;
        }
    }
    setWords();
}