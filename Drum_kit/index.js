const kits=['tom1','tom2','tom3','tom4','snare','crash','kick'];
const text=['w','a','s','d','j','k','l'];
const containerE=document.querySelector('.container');
kits.forEach((kit)=>{
    const btnE=document.createElement('button');
    containerE.appendChild(btnE);
    btnE.style.backgroundImage=`url(images/${kit}.png)`;
    btnE.classList.add('btn');
    btnE.innerText=text[kits.indexOf(kit)];
    btnE.addEventListener('click',()=>{
        if(kit=="tom1"){
            var sound1 = new Audio("audioSound/tom1.mp3");
            sound1.play();
        }else if(kit=="tom2"){
            var sound1 = new Audio("audioSound/tom2.mp3");
            sound1.play();
        }else if(kit=="tom3"){
            var sound1 = new Audio("audioSound/tom3.mp3");
            sound1.play();
        }else if(kit=="tom4"){
            var sound1 = new Audio("audioSound/tom4.mp3");
            sound1.play();
        }else if(kit=="snare"){
            var sound1 = new Audio("audioSound/snare.mp3");
            sound1.play();
        }else if(kit=="crash"){
            var sound1 = new Audio("audioSound/crash.mp3");
            sound1.play();
        }else if(kit=="kick"){
            var sound1 = new Audio("audioSound/kick.mp3");
            sound1.play();
        }

    })

    window.addEventListener('keydown',(event)=>{
        if(event.key==text[kits.indexOf(kit)]){
            if(kit=="tom1"){
                var sound1 = new Audio("audioSound/tom1.mp3");
                sound1.play();
            }else if(kit=="tom2"){
                var sound1 = new Audio("audioSound/tom2.mp3");
                sound1.play();
            }else if(kit=="tom3"){
                var sound1 = new Audio("audioSound/tom3.mp3");
                sound1.play();
            }else if(kit=="tom4"){
                var sound1 = new Audio("audioSound/tom4.mp3");
                sound1.play();
            }else if(kit=="snare"){
                var sound1 = new Audio("audioSound/snare.mp3");
                sound1.play();
            }else if(kit=="crash"){
                var sound1 = new Audio("audioSound/crash.mp3");
                sound1.play();
            }else if(kit=="kick"){
                var sound1 = new Audio("audioSound/kick.mp3");
                sound1.play();
            }
            btnE.style.transform="scale(.9)";
            setTimeout(()=>{btnE.style.transform="scale(1)";},200)
            

        }
    })
    })