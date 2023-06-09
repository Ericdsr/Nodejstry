var fetch = document.getElementById('fetcher')
const myRequest1 = new Request("./serveur/data.json");

function myRequest(){
  fetch('http://localhost:3000/')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch(console.error);


}

/*function fetchtry() {

  fetch('http://localhost:3000/')
  .then(res => res.text())
  .then(text => JSON.parse(fs.readFileSync('data.json')))
  .then(json => console.log(json.pageItems))
}
 */     
 /* data.data.forEach(get => {
      console.log(data.data)
      fetcher.innerHTML = `<div class="col-sm-6">
            <div class="card">
              <div class="card-body aleatoire">
                <p class="card-title auteurs"> ${id}</p>
                <h6 class="card-text citations"> ${auteurs}</h6>
              </div>
            </div>
          </div>`
  })
  })
  .catch(error => console.error(error))
} */