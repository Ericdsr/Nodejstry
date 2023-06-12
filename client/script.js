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

           div.innerHTML= ` <div class="card" style="width: 18rem;">
                            <div class="card-body">
                              <h5 class="card-title">Data</h5>
                              <p class="card-text">Nom : ${data.nom}</p>
                              <p class="card-text">Ville : ${data.ville}</p>
                            </div>
                          </div> `
        
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