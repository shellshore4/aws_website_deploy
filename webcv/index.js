const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://kla66xlwxsd7jxrzoxnaok4gry0tycvu.lambda-url.us-east-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Vous êtes le ${data} visiteur!`;
}

updateCounter();