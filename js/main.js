// constants

let tileType = ['rgb(204,0,0)', 'rgb(0,204,0)'];
let gameDifficulty = {
    "easy": {totalBombs: 10},
    "medium": {totalBombs: 25},
    "hard": {totalBombs: 40}
};

//Event Listener for Tile click
const elements = document.querySelectorAll(".box")
console.log(elements)

function test (event) {  
  console.log("click", event);
}

for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", test)
    assignBombs()
};

//assign bombs 
function assignBombs() {
 for(let i = 0; i < elements.length; i++){
      const randomBomb = Math.floor(Math.random()* tileType.length);       
      elements[i].style.backgroundColor = tileType[randomBomb];
 }
}

