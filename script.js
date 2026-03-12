let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); 


let turnO = true;
let count = 0;

const win_situation =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText="O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWin = checkWinner();
        if(count === 9 && !isWin){
            gameDraw();     
        }

    })
})

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};


const showWinner = (winner) =>{
    msg.innerText= `Congratulations winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const gameDraw = () =>{
    msg.innerText= `Game was a Draw.`
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=() =>{
    for (situation of win_situation){
        
        let p1 = boxes[situation[0]].innerText;
        let p2 = boxes[situation[1]].innerText;
        let p3 = boxes[situation[2]].innerText;

        if(p1 != "" && p2!= "" && p3!= ""){
            if(p1 === p2 && p2 === p3){
                showWinner(p1);
                return true;
            }
        }
    }
};

const resetGame = () => {
    turnO=true;
    count =0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


