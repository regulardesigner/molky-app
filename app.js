let title = document.querySelector('h1');
    title.innerText = `Molky App`;

let playerform = document.forms.player,
    playerNameInput = playerform.elements.name,
    btnAddPlayer = playerform.elements.add,
    btnStart = playerform.elements.start;

let playerList = document.querySelector('#player-list');
let playerArray = [];

btnAddPlayer.addEventListener('click', function(event){
    if(playerNameInput.value !== ""){
        addPlayer(playerNameInput.value);
        playerNameInput.value = "";
    }
    // prevent default behavior to send data to a server.
    event.preventDefault()
});

btnStart.addEventListener('click', function(event){
    startGame();
    event.preventDefault()
});

let addPlayer = player => {
    console.log( 'New Player: ' + player );
    playerList.innerHTML += `<li>${player}</li>`
    playerArray.push(player);
};

let startGame = () => {
    console.log('start - Molky');
};

let endGame = () => {
    console.log('end game');
};