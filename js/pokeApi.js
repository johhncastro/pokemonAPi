// make searchbar done
// display pokemon on screen





const url = "https://pokeapi.co/api/v2/pokemon/"
// const option = {"url": url + pokemon, "method": "GET"}

    // `<img src="${pokemon.sprites.other["official-artwork"].front_default}">`


const searchedPokemon = (pokemon) =>
    `<div id="pokemonCard">
        <h1 class="center-text">${pokemon.name}</h1>
        <img src="${pokemon.sprites.front_default}" style="width: 300px;">
        <div class="d-flex">
            <h3>Pokemon ID: ${pokemon.id}</h3>
            <h3>${pokemon.types.type}</h3>
        </div>
    </div>`

const pokemonIMG = (pokemon) => `<div style="border: 1px solid red">
                                    <h6 class="text-center">${pokemon.name}</h6>    
                                    <img src="${pokemon.sprites.front_default}" style="width: 150px">
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

function oneFiveOne(){
    const pokemon = ""
    const options = {"url": url + pokemon, "method": "GET"}
    $.ajax(options).then(function () {
        for(let i = 1; i < 152; i++) {
            pokemonApiCall(i)
        }
    });
}
oneFiveOne();




