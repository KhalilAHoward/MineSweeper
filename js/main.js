const elements = document.querySelectorAll(".box")
console.log(elements)
//elements.addEventListener("click", test())
//Is this a safeTile or mineTile
function test (event) {
  console.log("click", event)
}

for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", test)
}

