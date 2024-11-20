"use strict"
console.clear()

let polaroidBox = document.getElementById("polaroid-box");

axios
    .get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then((ans) => {
        let deck = ""
        document.getElementById("zoom-image")
        for (let i = 0; i <= 5; i++) {
            deck += `
                <div id="polaroid-${ans.data[i].id}" class="polaroid">
                    <img id="pin" src="./img/pin.svg" alt="">
                    <img class="debug" id="${ans.data[i].id}" src="${ans.data[i].thumbnailUrl}" alt="image">
                    <p class="debug">${ans.data[i].title}</p>
                </div>
            `;
        }
        polaroidBox.innerHTML = deck;

    })
    .catch((error) => {
        console.log(error);
    })

let polaroid = document.getElementsByClassName("polaroid")
let closeButton = document.getElementById("close-button");
let polaroidOverlay = document.getElementById("zoom-image")
let overlay = document.getElementById("overlay")

function showOverlay() {
    overlay.classList.remove("d-none");
}
polaroid.forEach(addEventListener("click", showOverlay));

function hideOverlay() {
    //let ThisPolaroidImg = polaroid.querySelector("img !#pin")
    //polaroidOverlay.src = ThisPolaroidImg.src;
    overlay.classList.add("d-none");
}
closeButton.addEventListener("click", hideOverlay);