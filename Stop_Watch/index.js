const start=document.querySelector("#start");
const stop=document.querySelector("#stop");
const reset=document.querySelector("#reset");
const mintues=document.querySelector(".min");
const sec=document.querySelector(".sec");
const millSec=document.querySelector(".millSec");
SecondCount=0;
minCount=0;
millSecCount=0;
start.addEventListener('click',()=>{ 
        timer=setInterval(timerFun,10);
    });
stop.addEventListener('click',()=>{
    clearInterval(timer);
    console.log('hhh')
})
reset.addEventListener('click',()=>{
    clearInterval(timer);
    SecondCount=0;
    minCount=0;
    millSecCount=0;
    millSec.innerText=`00`;
    sec.innerText=`00`;
    mintues.innerText=`00`;

})
function timerFun(){
    millSecCount++;
    if(millSecCount<=9){
        millSec.innerText=`0${millSecCount}`
    }else if(millSecCount==99){
        millSecCount=0;
        SecondCount++;
    }else{
        millSec.innerText=millSecCount;
    }
    if(SecondCount<=9){
        sec.innerText=`0${SecondCount}`;
    }else if(SecondCount==59){
        SecondCount=0;
        minCount++;
    }else{
        sec.innerText=SecondCount;
    }
    if(minCount<=9){
        mintues.innerText=`0${minCount}`;
    }else if(minCount==59){
        minCount=0;
    }else{
        mintues.innerText=minCount;
    }

}