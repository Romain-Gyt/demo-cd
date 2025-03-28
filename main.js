

console.log('Oui ca marche');

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40";

fetch(url)
  .then(response => response.json()) // Correction de "resoponse"
  .then(pokemon => {
    console.log(pokemon); // Correction de "log" => "console.log"
  })
  .catch(error => console.error("Erreur lors de la récupération des Pokémon :", error));
