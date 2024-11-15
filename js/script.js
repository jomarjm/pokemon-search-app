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
const spriteContainer = document.getElementById("img-container");

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

});

const findPokemon = async pkmnNameOrId => {
    pokemon = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pkmnNameOrId}`)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.log("Error:", err);
            alert("Pokémon not found.")
        });
    console.log("Pokemon:", pokemon);
    updatePokemonDisplay();
}

const updatePokemonDisplay = () => {
    types.innerHTML = "";
    pkmnName.textContent = `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`;
    pkmnId.textContent = `#${pokemon.id}`;
    weight.innerHTML = `<span class="bold">Weight</span>: ${pokemon.weight}lb`;
    height.innerHTML = `<span class="bold">Height</span>: ${pokemon.height}'`;
    hp.textContent = pokemon.stats[0].base_stat;
    attack.textContent = pokemon.stats[1].base_stat;
    defense.textContent = pokemon.stats[2].base_stat;
    spAttack.textContent = pokemon.stats[3].base_stat;
    spDefense.textContent = pokemon.stats[4].base_stat;
    speed.textContent = pokemon.stats[5].base_stat;
    spriteContainer.innerHTML = `<img src="${pokemon.sprites.front_default}" id="sprite">`;
    const typeNameP = [];
    console.log("pkmn type test:", pokemon.types[0].type.url, "- VALID");
    pokemon.types.forEach((el, index) => {    
        console.log(`type ${index + 1}: ${el.type.name}, url: ${el.type.url}`);
        typeNameP.push(document.createElement("p"));
        typeNameP[index].id = `${el.type.name}`
        typeNameP[index].classList.add("type");
        typeNameP[index].textContent = `${el.type.name.toUpperCase()}`;
        types.appendChild(typeNameP[index]);
    });
}

