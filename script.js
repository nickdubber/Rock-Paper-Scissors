function getComputerChoice(){
    let outputChoices = ["rock","paper","scissors"];
    let random=  Math.floor((Math.random() * outputChoices.length));
    let outPut=outputChoices[random];
    
    return(outPut)
}


// Game logic
function selectionOutput(){
    //DO NOT CHANGE
let compInput = getComputerChoice();
//adds formatting to output
let outPutChoiceFormatted = compInput.charAt(0).toUpperCase() + compInput.slice(1);
//Shows computer score
console.log("Computer: " + outPutChoiceFormatted)

//CHANGE
let playerSelection = "rOcK";
//Makes all lower case
let playerSelectionLower = playerSelection.toLowerCase();
// adds formatting to output
let playerSelectionOutput = playerSelectionLower.charAt(0).toUpperCase()+playerSelectionLower.slice(1);
//Shows player score
console.log("Nick: " + playerSelectionOutput)

if(compInput === "rock" && playerSelectionLower === "rock")
console.log("You draw")

else if (compInput === "rock" && playerSelectionLower ==="paper")
console.log("You win")

else if (compInput === "rock" && playerSelectionLower ==="scissors")
console.log("You lose")
    
else if(compInput === "paper" && playerSelectionLower === "rock")
    console.log("You lose")
    
else if (compInput === "paper" && playerSelectionLower ==="paper")
    console.log("You draw")
    
else if (compInput === "paper" && playerSelectionLower ==="scissors")
    console.log("You win")
    
else if(compInput === "scissors" && playerSelectionLower ==="rock")
    console.log("You win")
    
else if (compInput === "scissors" && playerSelectionLower ==="paper")
    console.log("You lose")
    
else if (compInput === "scissors" && playerSelectionLower ==="scissors")
    console.log("You draw")
    }
    
    selectionOutput();