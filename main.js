/*
We got help from Randy's demo code, Tim La, and Nikal Morgan
1. Initialize the game
    - players
    - board display
    - board model
    - current player tracker
    - click handlers for each column
2. Take player input
    - know which player is dropping a disc
    - which column are we dropping into?
    - is that column already full?
    - drop the disc into the top of the column
3. Check for game end conditions
    - tie
    - win
    - announce that the game is over

*/

const boardModel = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
console.log(boardModel)
let currentPlayer = 1 // 1 or 2
let numberOfDiscsDropped = 0


let col2 = document.getElementById('col2')
let col0 = document.getElementById('col0')
let col3 = document.getElementById('col3')
let col1 = document.getElementById('col1')
let col4 = document.getElementById('col4')
let col5 = document.getElementById('col5')
let col6 = document.getElementById('col6')

const displayMessage = function (currentPlayer) {
    document.getElementById('message').innerHTML = currentPlayer;
}

let board = document.getElementById('board')
const isGameOver = function (model) {
    for (let i = 0; i < boardModel.length; i++) { }
    // Check for a tie (numberofDiscsDropped === 42)
    return false // false, "tie", "win"
}

const displayTieMessage = function () {
    displayMessage("Tie game!")
}

const displayWinMessage = function () {
    displayMessage("Winner is _____")
}

let newDisc
const columnClickHandler = function (eventObj) {
    const selectedCol = eventObj.currentTarget
    const columnNum = Number(selectedCol.id.slice(-1))
    if (selectedCol.childElementCount < 6) {
        if (currentPlayer === 1) {
            newDisc = document.createElement('div')
            newDisc.setAttribute('class', 'redDisc')
            selectedCol.appendChild(newDisc)
            currentPlayer = 2
            displayCurrentPlayer(currentPlayer)
            numberOfDiscsDropped++
            // console.log(selectedCol.childElementCount)
            // console.log(columnNum)
            let splicePosition = Number(selectedCol.childElementCount)
            switch (splicePosition) {
                case 1:
                    boardModel[5][columnNum] = 1
                    break;
                case 2:
                    boardModel[4][columnNum] = 1
                    break;
                case 3:
                    boardModel[3][columnNum] = 1
                    break;
                case 4:
                    boardModel[2][columnNum] = 1
                    break;
                case 5:
                    boardModel[1][columnNum] = 1
                    break;
                case 6:
                    boardModel[0][columnNum] = 1
                    break;
            }

        } else {
            newDisc = document.createElement('div')
            newDisc.setAttribute('class', 'blackDisc')
            selectedCol.appendChild(newDisc)
            currentPlayer = 1
            displayCurrentPlayer(currentPlayer)
            numberOfDiscsDropped++
            // console.log(selectedCol.childElementCount)
            // console.log(columnNum)
            let splicePosition = Number(selectedCol.childElementCount)
            switch (splicePosition) {
                case 1:
                    boardModel[5][columnNum] = 2
                    break;
                case 2:
                    boardModel[4][columnNum] = 2
                    break;
                case 3:
                    boardModel[3][columnNum] = 2
                    break;
                case 4:
                    boardModel[2][columnNum] = 2
                    break;
                case 5:
                    boardModel[1][columnNum] = 2
                    break;
                case 6:
                    boardModel[0][columnNum] = 2
                    break;
            }
        }
    } else {
        displayMessage("This column is full. Choose another.")
    }
    
    console.log(boardModel)

    // console.log("Hi" + columnNum)
    // if (isColumnFull(columnNum)) {

    // } else {

    //     const gameStatus = isGameOver(boardModel)
    //     if (gameStatus === "tie") {
    //         displayTieMessage()
    //     } else if (gameStatus === "win") {
    //         displayWinMessage()
    //     }
    // }
}
const displayCurrentPlayer = function (currentPlayer) {
    displayMessage("Current player: " + currentPlayer)
}

const setUpEventListeners = function () {
    col0.addEventListener('click', columnClickHandler)
    col1.addEventListener('click', columnClickHandler)
    col2.addEventListener('click', columnClickHandler)
    col3.addEventListener('click', columnClickHandler)
    col4.addEventListener('click', columnClickHandler)
    col5.addEventListener('click', columnClickHandler)
    col6.addEventListener('click', columnClickHandler)
}

const initializeGame = function () {
    setUpEventListeners()
    displayCurrentPlayer(currentPlayer)
}

initializeGame()
