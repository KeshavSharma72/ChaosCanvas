//getting API btn
let catFacts = document.querySelector("#cat-facts");
let dogPics = document.querySelector("#dog-pics");
let jokes = document.querySelector("#jokes");
let parDiv = document.querySelector("#content");
const config = {headers: { Accept: "application/json"} };


catFacts.addEventListener('click', async ()=> {
    let url = "https://catfact.ninja/fact/";
    if (!(parDiv.querySelector("img") === null)) {
        let imgEl = parDiv.querySelector("img");
        parDiv.removeChild(imgEl);
    }
    try {
        let result = await axios.get(url);
        parDiv.innerText = result.data.fact;
    } catch (error) {
        parDiv.innerText = "Sorry! It looks like cats are sleeping";
    }
})

dogPics.addEventListener('click', async ()=> {
    let url = "https://dog.ceo/api/breeds/image/random";
    try {
        let result = await axios.get(url);
        parDiv.innerText = "";
        let imgEl = document.createElement("img");
        imgEl.setAttribute("src", result.data.message);
        parDiv.appendChild(imgEl);
    } catch (error) {
        parDiv.innerText = "Sorry! It looks like dogs have gone for a walk";
    }
    
})

jokes.addEventListener('click', async ()=> {
    let url = "https://v2.jokeapi.dev/joke/Any";
    if (!(parDiv.querySelector("img") === null)) {
        let imgEl = parDiv.querySelector("img");
        parDiv.removeChild(imgEl);
    }
    try {
        let result = await axios.get(url);
        if (result.data.joke === undefined) {
            let str = result.data.setup + "<br>" + result.data.delivery;
            parDiv.innerHTML = str;
        } else {
            parDiv.innerText = result.data.joke;
        }
    } catch (error) {
        parDiv.innerText = "Sorry! We are experiencing some issue ";
    }
})
