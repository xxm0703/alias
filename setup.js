let used_words = [];
let words = ["Котка", "Куче", "Риба", "Тигър", "Лъв", "Кон", "Слон", "Пелика", "Щъркел", "Лястовица", "Славей", "Магаре"];
let n = 5;
let playersCount = 2;
let players = Array();

class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
    }
    addToScore(n){
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
    }
    set_words();
}

function set_words() {
    let randomWords = get_words(n);
    for(let i = 1; i <= n; ++i){
        document.getElementById(i.toString()).innerHTML = randomWords[i-1];
    }
}

function submitting(form) {
    form = form.parentElement;
    form.style.visibility = "hidden";
    console.log(form);
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

function wordButtonClicked(e){
    console.log(e.target);
    if(e.target.style.backgroundColor === "gray"){
        e.target.style.backgroundColor = "";

        return;
    }
    e.target.style.backgroundColor = "gray";
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