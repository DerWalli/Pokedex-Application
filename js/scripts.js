//IIFE with Pokemon-Array and functions
let pokemonRepository = (function () {
    
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    let pokemonListElement = $('.pokemon-list');
      
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
      let listItem = $('<li class="list-group-item"></li>');
      let button =$ ('<button class="pokemon-button btn btn-warning" data-target="#pokemon-modal" data-toggle="modal">' + pokemon.name + '</button>');
      listItem.append(button);
      pokemonListElement.append(listItem);
      button.on('click', function(event) {
        showDetails(pokemon)
      })
    }


    function loadList() {
      return fetch(apiUrl).then(function (response) {
         return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
           let pokemon = {
            name: item.name,
             detailsUrl: item.url
           };
           add(pokemon);
           console.log(pokemon);
        });
      }).catch(function (e) {
          console.error(e);
        })
      }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types.map((type) => type.type.name).join(', ');
        }).catch(function (e) {
          console.error(e);
        });
      }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
          showModal(pokemon)
        });
    }
       
         
    function showModal(pokemon) {
      let modalBody = $('.modal-body');
      let modalTitle = $('.modal-title');

      modalBody.empty();
      modalTitle.empty();

      let titleElement = $('<h1>' + pokemon.name + '</h1>')

      let imageElement = $('<img class="modal-img" style="width:50%" src="' + pokemon.imageUrl + '" />')
      
      let typeContentElement = $('<p>' + 'type : ' + pokemon.types + '</p>');

      let weightContentElement = $('<p>' + 'weight : ' + pokemon.weight + '</p>');
      
      let heightContentElement = $('<p>' + 'height : ' + pokemon.height + '</p>');

      
           
      modalTitle.append(titleElement);
      modalBody.append(imageElement);
      modalBody.append(typeContentElement);
      modalBody.append(weightContentElement);
      modalBody.append(heightContentElement);
    }
        
  return {
     add,
     getAll,
     addListItem,
     loadList,
     loadDetails
    
   }
 })();
      
      
 pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
   });
 });