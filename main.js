let used_words = [];
let words = ["Котка", "Куче", "Риба", "Тигър", "Лъв", "Кон", "Слон", "Пелика", "Щъркел", "Лястовица", "Славей", "Магаре"];
let n = 5;
let players = 2;

class Player{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    addToScore(n){
        this.score += n;
    }
}

function setN(drop) {
    n = drop.value;
    drop.style.visibility = "hidden";
    setButtons();
}

function setButtons() {
    for (let i = 1; i <= n; ++i) {
        let btn = document.createElement("BUTTON");
        btn.id = i.toString();
        btn.className = "btn";
        document.getElementById("buttons").appendChild(btn);
    }
    set_words();
}

function set_words() {
    let words = get_words(n);
    for(let i = 1; i <= n; ++i){
        document.getElementById(i.toString()).innerHTML = words[i-1];
    }
}

function submiting(form) {
    form.style.visibility = "hidden";
    console.log(form);
    for(let i = 0; i < players; ++i){
        console.log(i);
    }
}

function editSignUp(form) {

    let inp = document.createElement("INPUT");
    inp.id = players.toString();
    inp.onfocus = "editSignUp(this)";
    players++;
    let txt = document.createTextNode("P"+players+": ");
    let br = document.createElement("BR");
    form.parentNode.insertBefore(txt, document.getElementById("submit"));
    form.parentNode.insertBefore(inp, document.getElementById("submit"));
    form.parentNode.insertBefore(br, document.getElementById("submit"));
}

function wordButtonClicked(btn){
    if(btn.style.backgroundColor === "gray"){
        btn.style.backgroundColor = "";

        return;
    }
    btn.style.backgroundColor = "gray";
}

function get_words(){
    let result = new Array(n);
    for (let i = 0; i < n; ++i){
        let index = Math.floor(Math.random()*words.length);
        while (used_words.indexOf(index) !== -1) {
            index = Math.floor(Math.random() * words.length);
            console.log(used_words);
        }
        result[i] = words[index];
        used_words.push(index);
    }
    return result;
}