"use strict"
console.clear()

let polaroidBox = document.getElementById("polaroid-box");
let closeButton = document.getElementById("close-button");
let polaroidOverlay = document.getElementById("zoom-image")
axios
    .get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then((ans) => {
        let deck = ""
        //console.log(ans.data)
        document.getElementById("zoom-image")
        for (let i = 0; i < ans.data.length; i++) {
            deck += `
                <div id="polaroid-${ans.data[i].id}" class="polaroid">
                    <img  id="pin" src="./img/pin.svg" alt="">
                    <img class="polaroid-img" id="${ans.data[i].id}" src="${ans.data[i].url}" alt="image">
                    <p class="debug">${ans.data[i].title}</p>
                </div>
            `;
        }
        polaroidBox.innerHTML = deck;
        let polaroid = document.getElementsByClassName("polaroid")

        let overlay = document.getElementById("overlay")
        //console.log(polaroid)
        Array.from(polaroid).forEach((value) => {
            value.addEventListener("click", (Event) => {
                let ThisPolaroidImgUrl = Event.currentTarget.querySelector(":nth-child(2)").src;
                console.log(ThisPolaroidImgUrl);
                polaroidOverlay.src = ThisPolaroidImgUrl
                overlay.classList.remove("d-none");

            })
        })
    })
    .catch((error) => {
        console.log(error);

    })



function hideOverlay() {

    overlay.classList.add("d-none");
}
closeButton.addEventListener("click", hideOverlay);