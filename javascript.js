let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let newgame=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;
const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetgame=() =>{
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
    
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
function disableboxes(){
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
function showwinner(winner){
    msg.innerText=`Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}
function checkwinner() {
  for (let pattern of winpattern) {
    let posval1=boxes[pattern[0]].innerText;
    let posval2=boxes[pattern[1]].innerText;
    let posval3=boxes[pattern[2]].innerText;
    if(posval1!=""&&posval2!="" && posval3!=""){
        if(posval1==posval2 && posval2==posval3){

            showwinner(posval1);
        }
    }
  }
}
newgame.addEventListener("click", resetgame);
reset.addEventListener("click" ,resetgame);
