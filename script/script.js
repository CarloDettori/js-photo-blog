"use strict"
console.clear()

let polaroidBox = document.getElementById("polaroid-box");

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((ans) => {
    let deck = ""
    for (let i = 0; i <= 5; i++) {
        deck += `
        <div id="polaroid-${ans.data[i].id}" class="polaroid">
                    <img id="pin" src="./img/pin.svg" alt="">
                    <img class="debug" id="" src="${ans.data[i].thumbnailUrl}" alt="image">
                    <p class="debug">${ans.data[i].title}</p>
                </div>
                `
    }
    polaroidBox.innerHTML = deck;
})
    .catch((error) => {
        console.log(error);
    })

