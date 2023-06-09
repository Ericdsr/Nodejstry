var fetch = document.getElementById('fetcher')

function fetchtry() {

    fetch('http://127.0.0.1/')
    .then(response => data.json())
    .then(data => {

        var username = username;
        var nickname = nickname;
        
    data.data.forEach(get => {
        console.log(data.data)
        fetch.innerHTML = `<div class="col-sm-6">
              <div class="card">
                <div class="card-body aleatoire">
                  <p class="card-title auteurs"> ${username}</p>
                  <h6 class="card-text citations"> ${nickname}</h6>
                </div>
              </div>
            </div>`
    })
    })
    .catch(error => console.error(error))
}
