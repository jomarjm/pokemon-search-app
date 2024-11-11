const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pkmnName = document.getElementById("pokemon-name");
const pkmnId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const spAttack = document.getElementById("special-attack");
const spDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const specialCharRegExp = /[^a-z0-9 ]/gi;
const whiteSpaceRegExp = /\s/g;
const pokemonNameRegexp = /[a-z]*\d?/g

// to check if input is valid
let pokemonArr = {};
let pokemon = {};

fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon")
    .then(res => res.json())
    .then(data => {
        pokemonArr = data;
    })
    .catch(err => console.log(err));

setTimeout(function() {
    console.log(pokemonArr);
}, 1000);

searchBtn.addEventListener("click", e => {
    e.preventDefault();
    if (!searchInput.value) {
        alert("Please enter a Pokémon name or number.");
        return;
    }
    const nameOrId = searchInput.value.toLowerCase().replace(specialCharRegExp, "").replace(whiteSpaceRegExp, "-");    
    console.log("Pokemon name or ID:", nameOrId);
    findPokemon(nameOrId);
    setTimeout(console.log(pokemon), 2000);

});

const findPokemon = pkmnNameOrId => {
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pkmnNameOrId}`)
        .then(res => res.json())
        .then(data => {
            pokemon = data;
        })
        .catch(err => {
            console.log("Error:", err);
            alert("Pokémon not found.")
        });
}

