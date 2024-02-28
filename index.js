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



var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}



