let boxex = document.querySelectorAll(".box");
let restbtn = document.querySelector("#Reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turnO = true;
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
   turnO = true; 
   enableBoxes();
   msgContainer.classList.add("hide");

};


boxex.forEach((box)=> {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
        box.innerText = "X";
        turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxex){
        box.disabled = true;
    }

};

const enableBoxes = () => {
    for(let box of boxex){
        box.disabled = false;
        box.innerText = "";
    }

};


const showWinner = (winner) => {
    msg.innerText = `Congrulation,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes() ;
};

const checkWinner = () => {
    for(let pattern of winpattern){
        let pos1val = boxex[pattern[0]].innerText; 
        let pos2val = boxex[pattern[1]].innerText; 
        let pos3val = boxex[pattern[2]].innerText; 

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }

                
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
restbtn.addEventListener("click",resetGame);



