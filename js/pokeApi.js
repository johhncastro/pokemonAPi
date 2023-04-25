// make searchbar done
// display pokemon on screen





const url = "https://pokeapi.co/api/v2/pokemon/"
// const option = {"url": url + pokemon, "method": "GET"}

    // `<img src="${pokemon.sprites.other["official-artwork"].front_default}">`


const searchedPokemon = (pokemon) =>
    `<div class="card" style="width: 18rem;">
    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
    <div class="card-body">
      <h5 class="card-title">${pokemon.name}</h5>
      <p class="card-text">ID: ${pokemon.id}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="types">
          ${pokemon.types.map(type => `<span class="badge badge-primary">${type.type.name}</span>`)}
        </div>
      </div>
    </div>
  </div>`;


const pokemonIMG = (pokemon) =>
    `<div class="mx-3 my-4" style="border: 1px solid #ccc; border-radius: 8px; overflow: hidden;">
    <h6 class="text-center mt-3 mb-0">${pokemon.name}</h6>    
    <img src="${pokemon.sprites.front_default}" class="d-block mx-auto my-3" style="width: 150px;" alt="${pokemon.name} picture">
  </div>`;


const findNewPokemon = () => `<button onclick="window.location.reload()">Find New Pokemon</button>`

function pokemonApiCall (pokemon){
    const options = {"url": url + pokemon, "method": "GET"}
    $.ajax(options).then(function (data) {
        console.log(data);
        $('#pokemonImage').append(pokemonIMG(data))
        // $('#pokemon-desc').append(searchedPokemon(data))
    });
}
// the function above makes an api call to the poke api and displays the information about the console

function searchApiCall(pokemon){
    const options ={"url": url+ pokemon,"method":"GET"}
    $.ajax(options).then(function (data){
        $("#pokemon-desc").append(searchedPokemon(data))
    })
}

// this search bar is gonna work maybe on a different page still not sure what to do abt this ???
$('#search-btn').click(function () {
    document.getElementById("search-bar").style.display = "none";
    document.getElementById("search-btn").style.display = "none";
    const pokeName = $('#search-bar').val().toLowerCase();
    searchApiCall(pokeName)
    $("#findPokemon").append(findNewPokemon())
});



function oneFiveOne() {
    let promise = Promise.resolve(); // first promise in the chain
    for (let i = 1; i < 152; i++) {
        const options = { "url": url + i, "method": "GET" } // update pokemon URL for each iteration
        const promiseCall = () => new Promise((resolve, reject) => {
            $.ajax(options).then((data) => {
                $('#pokemonImage').append(pokemonIMG(data)); // display Pokemon image
                resolve(); // resolve promise to signal the call is done
            })
                .catch((error) => {
                    console.log(`Error fetching data for Pokemon ${i}: ${error}`);
                    reject(error);
                })
        });
        promise = promise.then(promiseCall); // add the current promise to the chain
    }
    promise
        .then(() => {
            console.log("All Pokemon loaded successfully");
        })
        .catch((error) => {
            console.log(`Failed to complete all Pokemon calls: ${error}`);
        })
}

oneFiveOne();




