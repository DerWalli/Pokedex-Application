//IIFE with Pokemon-Array and functions
let pokemonRepository = (function () {
    
    let pokemonList = [
        { name: 'Pichu', height: 0.3, type: ['Electric'] },
        { name: 'Pikachu', height: 0.4, type: ['Electric'] },
        { name: 'Raichu', height: 0.8, type: ['Electric'] },
        { name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison'] },
        { name: 'Ivysaur', height: 1, type: ['Grass', 'Poison'] },
        { name: 'Venusaur', height: 2, type: ['Grass', 'Poison'] },
        { name: 'Charmander', height: 0.6, type: 'Fire'},
        { name: 'Charmeleon', height: 1.1, type: 'Fire'},
        { name: 'Charizard', height: 1.7, type: ['Fire', 'Flying'] },
        { name: 'Squirtle', height: 0.5, type: 'Water'},
        { name: 'Wartortle', height: 1, type: 'Water'},
        { name: 'Blastoise', height: 1.6, type: 'Water'}
    ];

      
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let list = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.addEventListener('click', function(event){
            showDetails(pokemon);
        });
        button.innerText = pokemon.name;
        button.classList.add('buttonClass');
        listItem.appendChild(button);
        list.appendChild(listItem);
    }

    function showDetails(pokemon) {
        console.log(pokemon);

    }

    return {
        add,
        getAll,
        addListItem
    };


})();
// Add Pokemon to Array
pokemonRepository.add({ name: 'Testaddition-mon', height: 1, type: ['PC', 'Papa'] });

//Display Pokemon
pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon)
        
})
/*
pokemonRepository.getAll().forEach(function(pokemon){
    let test = document.querySelector(".new-list")
    if(pokemon.height > 1.0) {
        document.write('<li class="pokemon-list__item"><span class="Pokename">' + pokemon.name + "</span> (height: " + pokemon.height + " meters) " + '- <span class="big">Wow, that is big!</span><br><br></li>')
    }
    else{
        document.write('<li class="pokemon-list__item"><span class="Pokename">' + pokemon.name + "</span> (height: " + pokemon.height + " meters)<br><br></li>")}
})
*/



