let boxes = document.querySelectorAll(".box");
let newgamebtn = document.querySelector(".newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // player O

const winPatterns = [   //Here 2D Array Is used to Store all Winning patterns of the game.
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
boxes.forEach((box) => {  // creating Event listener for each button or box.
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO===true){  //Checking for player O turn.
            box.innerText = "O";
            turnO = false;  // Giving Turn to player X.
        }
        else{
            box.innerText = "X"; 
            turnO = true; // Again Giving Turn to player O.
        }
        box.disabled = true; // used to disable the button once it is clicked to remove another clicking on the same button.
        checkwinner();
    });
});

const newgame = ( ) => { // functon to start the new game.
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const enableboxes = ( ) => {  // function to enable boxes after getting the winner and to start the new game.
    for(let box of boxes){
      box.disabled = false;
      box.innerText = "";
    }
};

const disableboxes = () => {  // function to disable button after getting the first inning condition to avoid checkng for another winning condition.
     for(let box of boxes){
        box.disabled = true;
     }
};
const showwinner = (winner) => {          //  function for displaying winner of the game.
     msg.innerText = `Congrats, winner is ${winner}`;
     msgcontainer.classList.remove("hide");
     disableboxes();
};

const checkwinner = () => {           
 for (let pattern of winPatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "")  // checking condition for winning the game.
        {
          if(pos1val === pos2val && pos2val === pos3val)
            {
               console.log("Winner",pos1val);
               showwinner(pos1val);
               break;
            }
        }
}
};

newgamebtn.addEventListener("click", newgame); // Event for starting new game.

