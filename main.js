/*
We got help from Randy's demo code, Tim La, Drew Sexton, Nikal Morgan, and 7/1 Evening Study Hall.


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
let currentPlayer = 1 
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


const winnerVertical = function (boardModel) {
    for (let rowNum = 0; rowNum < 3; rowNum++) {
        for (let colNum = 0; colNum < boardModel[rowNum].length; colNum++) {
            if (boardModel[rowNum][colNum] === boardModel[rowNum + 1][colNum] &&
                boardModel[rowNum][colNum] === boardModel[rowNum + 2][colNum] &&
                boardModel[rowNum][colNum] === boardModel[rowNum + 3][colNum] &&
                boardModel[rowNum][colNum] !== 0) {
                console.log("win")
                return true
            }
        }
    }
    return false
}

const winnerHorizontal = function (boardModel) {
    for (let rowNum = 0; rowNum < boardModel.length; rowNum++) {
        for (let colNum = 0; colNum < 4; colNum++) {
            if (boardModel[rowNum][colNum] === boardModel[rowNum][colNum + 1] &&
                boardModel[rowNum][colNum] === boardModel[rowNum][colNum + 2] &&
                boardModel[rowNum][colNum] === boardModel[rowNum][colNum + 3] &&
                boardModel[rowNum][colNum] !== 0) {
                console.log("win")
                return true
            }
        }
    }
    return false
}

const winnerDiagonalUp = function (boardModel) {
    for (let rowNum = 3; rowNum < boardModel.length; rowNum++) {
        for (let colNum = 0; colNum < boardModel[rowNum].length; colNum++) {
            if (boardModel[rowNum][colNum] === boardModel[rowNum - 1][colNum + 1] &&
                boardModel[rowNum][colNum] === boardModel[rowNum - 2][colNum + 2] &&
                boardModel[rowNum][colNum] === boardModel[rowNum - 3][colNum + 3] &&
                boardModel[rowNum][colNum] !== 0) {
                console.log(boardModel[rowNum][colNum])
                return true
            }
        }
    }
    return false
}

const winnerDiagonalDown = function (boardModel) {
    for (let rowNum = 0; rowNum < 3; rowNum++) {
        for (let colNum = 0; colNum < 4; colNum++) {
            if (boardModel[rowNum][colNum] === boardModel[rowNum + 1][colNum + 1] &&
                boardModel[rowNum][colNum] === boardModel[rowNum + 2][colNum + 2] &&
                boardModel[rowNum][colNum] === boardModel[rowNum + 3][colNum + 3] &&
                boardModel[rowNum][colNum] !== 0) {
                console.log(boardModel[rowNum][colNum])
                return true
            }
        }
    }
    return false
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
            if (winnerVertical(boardModel) === true) {
                displayWinMessage(currentPlayer)
            }
            else if (winnerHorizontal(boardModel) === true) {
                displayWinMessage(currentPlayer)
            }
            else if (winnerDiagonalUp(boardModel) === true) {
                displayWinMessage(currentPlayer)
            }
            else if (winnerDiagonalDown(boardModel) === true) {
                displayWinMessage(currentPlayer)
            } else {
                currentPlayer = 2
                displayCurrentPlayer(currentPlayer)
                numberOfDiscsDropped++
            }

            if (numberOfDiscsDropped === 42) {
                document.getElementById('message').innerHTML = "It's a draw"
            }

        } else {
            newDisc = document.createElement('div')
            newDisc.setAttribute('class', 'blackDisc')
            selectedCol.appendChild(newDisc)
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
            if (winnerVertical(boardModel) === true) {
                console.log(currentPlayer + 'wins')
                displayWinMessage(currentPlayer)
            }
            else if (winnerHorizontal(boardModel) === true) {
                console.log(currentPlayer + 'wins')
                displayWinMessage(currentPlayer)
            }
            else if (winnerDiagonalUp(boardModel) === true) {
                displayWinMessage(currentPlayer)
            }
            else if (winnerDiagonalDown(boardModel) === true) {
                displayWinMessage(currentPlayer)
            } else {
                currentPlayer = 1
                displayCurrentPlayer(currentPlayer)
                numberOfDiscsDropped++
            }

            if (numberOfDiscsDropped === 42) {
                document.getElementById('message').innerHTML = "It's a draw"
            }

        }
    } else {
        displayMessage("This column is full. Choose another.")
    }
}

// console.log("Hi" + columnNum)

// } else {

//     const gameStatus = isGameOver(boardModel)
//     if (gameStatus === "tie") {
//         displayTieMessage()
//     } else if (gameStatus === "win") {
//         displayWinMessage()
//     }
// }

// console.log(boardModel)
const displayCurrentPlayer = function (currentPlayer) {
    displayMessage("Current player: " + currentPlayer)
}
const displayTieMessage = function () {
    displayMessage("Tie game!")
}

const displayWinMessage = function (currentPlayer) {
    displayMessage("Winner is Player " + currentPlayer)
    // document.getElementById('endgame').innerHTML = "Winner is Player " + currentPlayer
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
