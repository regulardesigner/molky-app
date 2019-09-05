let title = document.querySelector('h1');
    title.innerText = `Molky App`;

let playerform = document.forms.player,
    playerNameInput = playerform.elements.name,
    btnAddPlayer = playerform.elements.add,
    btnStart = playerform.elements.start;

let playerList = document.querySelector('#player-list');
// store the new player :name and :score in an object
let newPlayer = {};
// store players object in an array
let playerArray = [];

btnAddPlayer.addEventListener('click', function(event){
    if(playerNameInput.value !== ""){
        addPlayer(playerNameInput.value);
        playerNameInput.value = "";
    } else{
        alert("Please add the name of the next player.");
    }
    // prevent default behavior to send data to a server.
    event.preventDefault()
});

btnStart.addEventListener('click', function(event){
    startGame();
    event.preventDefault()
});

let addPlayer = playerName => {
    console.log( 'New Player: ' + playerName );
    playerList.innerHTML += `<li>${playerName}</li>`
    newPlayer = {name: playerName, score: 0}
    playerArray.push(newPlayer);
};

let startGame = () => {
    console.log('start - Molky');
};

let endGame = () => {
    console.log('end game');
};