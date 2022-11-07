const url = "https://pokeapi.co/api/v2/pokemon/"
// const options = {"url": "https://pokeapi.co/api/v2/pokemon/" + pokemon, "method": "GET"}

    // `<img src="${pokemon.sprites.other["official-artwork"].front_default}">`

const pokemonIMG = (pokemon) => `<img src="${pokemon.sprites.front_default}">`;


function pokemonApiCall (pokemon){
    const options = {"url": "https://pokeapi.co/api/v2/pokemon/" + pokemon, "method": "GET"}
    $.ajax(options).then(function (data) {
        console.log(data);
        $('#pokemonImage').append(pokemonIMG(data))
    });
}
// the function above makes an api call to the poke api and displays the information about the console



// function searchPokemon (){
//         document.getElementById('search-btn').onclick(function (){
//         pokemonApiCall(document.getElementById('search-bar').value);
//     });
// }




$('#search-btn').click(function () {
    const pokeName = $('#search-bar').val();
    pokemonApiCall(pokeName);
});
