const text = document.querySelector(".segundo-text");

const textLoad= () => {
    setTimeout(() => {
        text.textContent = "Bem vindo!";
    },0);
    setTimeout(() => {
        text.textContent = "Sou o João!";
    },4000);
}
textLoad(0);
setInterval(textLoad,8000);