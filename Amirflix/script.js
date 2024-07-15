//una funzione che permette di dare il colore rosso click del titolo Deadpool, ascolta il clik e cambia colore
const color = "red";
const previewTitle = document.querySelector("#preview-title");
console.log(previewTitle);
function changeColor() {
  previewTitle.style.color = color;
}
previewTitle.addEventListener("click", changeColor);
//qui invece all'ascolto del click sull'icona del volume, se é mutato cambia e si sente il volume(e viceversa ovviamente)
const video = document.querySelector("video");
const muteIcon = document.querySelector(".fa-volume-mute");
const muteButton = muteIcon.parentNode;
muteButton.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    muteIcon.classList.remove("fa-volume-mute");
    muteIcon.classList.add("fa-volume-up");
  } else {
    video.muted = true;
    muteIcon.classList.remove("fa-volume-up");
    muteIcon.classList.add("fa-volume-mute");
  }
});
//qui ho selezionato tutte le immagini e sempre all'ascolto dell'evento "mouseenter" l'immagine diventa piú grande di un 5% e quando il puntatore esce dall'immagine, la card torna alla dimensiore precendente
const images = document.querySelectorAll("#categories .category img");
console.log(images);

images.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.05)";
  });
  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
});
//qui ho fatto un metodo per poter risalire immediatamente in cima alla pagina tramite una piccola freccetta che appare in basso a destra quando si scende
const button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = '<i class="fas fa-chevron-circle-up" ></i>';
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.display = "none";
//ho scoperto lo smooth che permetto una salita piú dolce rispetto a quella classica
button.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});
