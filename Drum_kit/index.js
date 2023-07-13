const kits=['tom1','tom2','tom3','tom4','snare','crash','kick'];
const text=['w','a','s','d','j','k','l'];
const containerEl=document.querySelector('.container');
    kits.forEach((kit) => {
        const btnEl = document.createElement("button");
        btnEl.classList.add("btn");
        btnEl.innerText = kit;
        btnEl.style.backgroundImage = "url(" + kit + ".png)";
        containerEl.appendChild(btnEl);
        btnEl.innerText=text[kits.indexOf(kit)];
        const audioEl = document.createElement("audio");
        audioEl.src = "" + kit + ".mp3";
        containerEl.appendChild(audioEl);
        btnEl.addEventListener("click", () => {
          audioEl.play();
        });
        window.addEventListener("keydown", (event) => {
          if (event.key === text[kits.indexOf(kit)]) {
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(() => {
              btnEl.style.transform = "scale(1)";
            }, 100);
          }
        });
      });