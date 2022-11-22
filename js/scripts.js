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


for (let i = 0;
    i < pokemonList.length; i++) {
    if(pokemonList[i].height > 1.0) {
        document.write('<li class="pokemon-list__item"><span class="Pokename">' + pokemonList[i].name + "</span> (height: " + pokemonList[i].height + " meters) " + '- <span class="big">Wow, that is big!</span><br><br></li>')
    }
    else{
        document.write('<li class="pokemon-list__item"><span class="Pokename">' + pokemonList[i].name + "</span> (height: " + pokemonList[i].height + " meters)<br><br></li>")}
}