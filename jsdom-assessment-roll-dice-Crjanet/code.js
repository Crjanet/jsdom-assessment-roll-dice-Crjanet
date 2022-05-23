let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!
function rollDie() {
    roll = Math.floor(Math.random() * 6) + 1
    return roll
}

function rollDieTwo() {
    rollOne = Math.floor(Math.random() * 6) + 1
    rollTwo = Math.floor(Math.random() * 6) + 1
    let sum = rollOne + rollTwo
    // rendergraph(results)
    return sum 
}

let submit = document.getElementById("roll")
let secondSubmit = document.getElementById("thousand")
let result = document.getElementById("result")
let graph = document.getElementById("graph")

submit.addEventListener("click", function() {
    let finalResults = rollDieTwo()
    result.innerHTML = `You rolled a pair of dices of: ${finalResults}`
    results[finalResults] += 1
    // console.log(answers)
    rendergraph()
})



secondSubmit.addEventListener("click", function() {
    for(let index = 2; index <= 1000; index++) {
        let rollOfT = rollDieTwo()
        results[rollOfT] += 1
        result.innerHTML = `You rolled a 1000 times!`
        // rendergraph()
    }
})

function rendergraph() {
    // graph.innerHTML = ""
    for(let index = 2; index <= results.length; index++){
        let secondRollT = rollDieTwo()
        results[secondRollT] += 1
        let newElement = document.createElement("div")
        graph.append(newElement)
        newElement.innerText = `You rolled ${index}: ${results[index]} times`
        // let diceResults = results[index]
        // results[newElement] += 1
    //     let graph = document.getElementById("graph")
    //     graph.appendChild(newElement)
    //     newElement.classList.add(submit)
    //     let howMuch = document.createElement("newElement")
    //     howMuch.classList.add(howMuch)
        
    //     newElement.innerHTML = `You rolled ${index} ${results[index]} times`
    //     newElement.appendChild(howMuch)
    }
}
rendergraph()