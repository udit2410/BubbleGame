

let count=60;
var hitNumber=0;
let scoreCard=0

const makeBubble=()=>{
    var bubbles="";
    for(let i=0;i<56;i++){
    let random=Math.floor(Math.random()*10);
    bubbles+=`<div class=bubble>${random}</div>`
    document.getElementById("panel-btm").innerHTML=bubbles;
}


}
const score=()=>{
    scoreCard+=10;
    document.getElementById("score").textContent=scoreCard;
    


}



const timer=()=>{
    let setTimer=setInterval(()=>{
         let timerCount = document.getElementById("timer");
         if(count>0){
             count--;
             timerCount.innerText=count;
             
             
         }
         else{
            clearInterval(setTimer);
        
            document.querySelector("#panel-btm").innerHTML=`<div id="over"><h1>GAME OVER</h1> <h3>YOUR SCORE: ${scoreCard}</h3></div>`;
            //document.querySelector("#panel-btm").style.backgroundColor="cyan";

           
         }
        
    },1000)
}
const hit=()=>{
    hitNumber =   Math.floor(Math.random()*10);
    document.getElementById("hit").textContent=hitNumber;
    
}




document.getElementById("panel-btm").addEventListener("click",(val)=>{
   let clicked=Number(val.target.textContent);
   if(clicked===hitNumber){
         score();
         hit();
        
         makeBubble();
   }
     
})


hit();
makeBubble();

timer();