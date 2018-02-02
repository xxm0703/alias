let used_words = [];
let words = ["Котка", "Куче", "Риба", "Тигър", "Лъв", "Кон", "Слон", "Пеликан", "Щъркел", "Лястовица", "Славей", "Магаре"];
let n = 5;
let playersCount = 2;
let players = Array();
let currentPlayer = -1;

class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
    }
    addScore(n){
        this.score += n;
    }
}

function setN(drop) {
    n = drop.value;
    drop.parentElement.removeChild(drop);
    setButtons();
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
    setWords();
}

function setWords() {
    currentPlayer = (currentPlayer + 1) % playersCount;
    document.getElementById("timer").innerHTML = players[currentPlayer].score;
    document.getElementById("p_name").innerHTML = players[currentPlayer].name;
    let randomWords = get_words(n);
    for(let i = 1; i <= n; ++i){
        let but = document.getElementById(i.toString());
        but.innerHTML = randomWords[i - 1];
        but.style.backgroundColor = "";
    }
}

function submitting(form) {
    form = form.parentElement;
    form.style.visibility = "hidden";
    for(let i = 0; i < playersCount; ++i){
        let player = new Player(form[i].value);
        players.push(player);
    }
    form.parentElement.removeChild(form);
    document.getElementById("select").style.visibility = "visible";
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

function get_words(){
    let result = new Array(n);
    for (let i = 0; i < n; ++i){
        let index = Math.floor(Math.random()*words.length);
        while (used_words.indexOf(index) !== -1) {
            index = Math.floor(Math.random() * words.length);
        }
        result[i] = words[index];
        used_words.push(index);
    }
    return result;
}