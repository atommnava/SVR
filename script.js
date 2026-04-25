const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

function joinMessage(){
    alert("¡Gracias por comprometerte! Recibirás guía de acciones");
}

document.getElementById("joinBtn").addEventListener("click", joinMessage);
document.getElementById("joinBtn2").addEventListener("click", joinMessage);

let counter = 0;

setInterval(() => {
    const random = Math.floor(Math.random() * 151) + 50;
    counter += random;

    document.getElementById("plasticCounter").textContent =
        `${counter} kg`;
}, 2000);

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
});

document.querySelectorAll(".reveal").forEach(section=>{
    observer.observe(section);
});