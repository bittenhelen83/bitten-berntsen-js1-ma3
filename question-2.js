const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {
    const response = await fetch(url);

    const list = await response.json();

    const facts = list.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {

        console.log(facts[i].tags);

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div>Name: ${facts[i].name}, Rating: ${facts[i].rating}, Tags: ${facts[i].tags.length}</div>`;
    }

    try {
        getGames();
        console.log("success");
    }
    catch (error) {
        console.log("error occured", error)
        resultsContainer.innerHTML = "Error!";
    }

    finally {
        console.log("finally");
    }

}

getGames();