/* ===========================
   COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const updateCounter = () => {

        const increment = Math.ceil(target / 100);

        if (count < target) {

            count += increment;

            if (count > target) count = target;

            counter.innerText = count;

            setTimeout(updateCounter, 20);

        }

    };

    updateCounter();

});


/* ===========================
   CHATBOT
=========================== */

function sendMessage() {

    let input = document.getElementById("user-input");

    let message = input.value.trim();

    if (message === "") return;

    let chatBox = document.getElementById("chat-box");

    let userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.innerText = message;

    chatBox.appendChild(userMessage);

    let reply = "";

    const msg = message.toLowerCase();

    if (msg.includes("linux")) {

        reply = "Linux is an open-source operating system widely used in DevOps.";

    }

    else if (msg.includes("git")) {

        reply = "Git helps developers track code changes using version control.";

    }

    else if (msg.includes("docker")) {

        reply = "Docker packages applications into containers.";

    }

    else if (msg.includes("kubernetes")) {

        reply = "Kubernetes manages containers across multiple servers.";

    }

    else if (msg.includes("jenkins")) {

        reply = "Jenkins automates CI/CD pipelines.";

    }

    else if (msg.includes("aws")) {

        reply = "AWS provides cloud services for hosting and deployment.";

    }

    else if (msg.includes("devops")) {

        reply = "DevOps combines Development and Operations for faster software delivery.";

    }

    else {

        reply = "Ask me about Linux, Git, Docker, Kubernetes, Jenkins or AWS.";

    }

    setTimeout(() => {

        let botMessage = document.createElement("div");

        botMessage.className = "bot-message";

        botMessage.innerText = reply;

        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 600);

    input.value = "";

}


/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

    const loadingText = document.getElementById("loading-text");

    const text = "Initializing DevBot...";

    let i = 0;

    function type() {

        if (i < text.length) {

            loadingText.innerHTML += text.charAt(i);

            i++;

            setTimeout(type, 70);

        }

    }

    type();

    setTimeout(() => {

        document.querySelector(".loader").style.display = "none";

    }, 2500);

});
/* ================= BACK TO TOP ================= */

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300||document.documentElement.scrollTop>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/* ================= SEARCH MODULE ================= */

function searchModule() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".module-card");

    cards.forEach(function(card) {

        let title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

}