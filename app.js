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
    // trigger the startGame function if two players are stored in the playerArray
    if(playerArray.length > 1){
        startGame();
    }else{
        alert('You need to be at least two players to play Molky. \nPlease add your players name.')
    }
    event.preventDefault()
});

let nextPlayerForm = document.forms.turn;
let btnNextPlayer = nextPlayerForm.elements.next;

btnNextPlayer.addEventListener('click', function(event){
    nextTurn();
});

let addPlayer = playerName => {
    console.log( 'New Player: ' + playerName );
    // show the new player name in the player list (ol>li)
    playerList.innerHTML += `<li>${playerName}</li>`
    // create a newPlayer object with the name of the new player and his initial score
    newPlayer = {name: playerName, score: 0}
    // push the newPlayer object into the playerArray
    playerArray.push(newPlayer);
};

let startGame = () => {
    console.log('start - Molky');

    let hidePlayerSection = document.querySelector('#add-players');
        hidePlayerSection.classList.add('hide');

    let showTurnsSection = document.querySelector('#turns');
        showTurnsSection.classList.toggle('hide');

    let titleSection = document.querySelector('#turns h2');
        titleSection.innerHTML = `${playerArray[0].name}, are you ready to start?`;
};

let nextTurn = count => {
    console.log('Next -> player');
};

let endGame = () => {
    console.log('end game');
};