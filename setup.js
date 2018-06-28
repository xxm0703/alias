let words = ["Котка", "Куче", "Риба", "Тигър", "Лъв", "Кон", "Слон", "Пеликан", "Щъркел", "Лястовица", "Славей", "Магаре"];
let n = 5;
let reset;
let timer, time = -1;
let playersCount = 2;
let players = Array(playersCount);
let currentPlayer = 0;

class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
    }
    addScore(n){
        this.score += n;
    }
}

function submitting(form) {
    form = form.parentElement;
    form.style.visibility = "hidden";
    for (let i = 0; i < playersCount; ++i) {
        players[i] = new Player(form[i].value);
    }
    remove(form);
    document.getElementById("select").style.visibility = "visible";
}

function remove(element) {
    element.parentElement.removeChild(element);
}

function setN(drop) {
    n = drop.value;
    remove(drop);
    document.getElementById("time_set").style.visibility = "visible";
}

function setButtons() {
    for (let i = 1; i <= n; ++i) {
        let btn = document.createElement("BUTTON");
        btn.id = i.toString();
        btn.className = "btn";
        btn.addEventListener('click', wordButtonClicked);
        document.getElementById("buttons").appendChild(btn);
        document.getElementById("buttons").appendChild(document.createElement("BR"));
    }
    start();
}

function setWords() {
    refresh();
    let randomWords = get_words();
    for(let i = 1; i <= n; ++i){
        let but = document.getElementById(i.toString());
        but.innerHTML = randomWords[i - 1];
        but.style.backgroundColor = "";
    }
}

function get_words() {
    let result = [];
    let used_words = [];
    for (let i = 0; i < n; ++i) {
        let index = Math.floor(Math.random() * words.length);
        while (used_words.indexOf(index) !== -1) {
            index = Math.floor(Math.random() * words.length);
        }
        result[i] = words[index];
        used_words.push(index);
    }
    return result;
}

function refresh() {
    document.getElementById("p_stat").innerHTML = players[currentPlayer].name + '&emsp;' + players[currentPlayer].score;
}

function start() {
    timer = setInterval(decrement, 1000);
    setWords();
}

function changePlayer() {
    currentPlayer = (currentPlayer + 1) % playersCount;
    start();
}

function timeSet(e) {
    reset = parseInt(e.value);
    time = reset;
    remove(e);
    setButtons();
}

function decrement() {
    --time;
    if (time < 0) {
        clearInterval(timer);
        time = reset;
        document.getElementById("timer").innerHTML = time.toString();
        changePlayer();
        return;
    }
    document.getElementById("timer").innerHTML = time.toString();
}
// function editSignUp(form) {
//
//     let inp = document.createElement("INPUT");
//     inp.id = "input" + players.toString();
//     inp.onfocus = editSignUp;
//     players++;
//     let txt = document.createTextNode("P"+players+": ");
//     let br = document.createElement("BR");
//     form.parentNode.insertBefore(txt, document.getElementById("submit"));
//     form.parentNode.insertBefore(inp, document.getElementById("submit"));
//     form.parentNode.insertBefore(br, document.getElementById("submit"));
// }
