var fetchs = document.getElementById('fetcher');
const myRequest1 = new Request("./serveur/data.json");
var try3 = document.getElementById('try');


function fetchData() {
  fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(data => {
             // Créer une nouvelle div
        const div = document.createElement('div');
        
           // Ajouter le contenu de la réponse à la div
      div.textContent = JSON.stringify(data);
        
        // Ajouter la div à la section avec l'id "sect"
        const section = document.getElementById('sect');
        section.appendChild(div);
      console.log(data);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}
fetchData();