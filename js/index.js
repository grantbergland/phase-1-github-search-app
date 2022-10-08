// console.log('Hello world, I am here to learn how to do stuff.')

// fetch('https://api.github.com/users') //  <--- OK, here I am fetching all the data and cosole.log-ing it.
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const init = () => {
    const githubform = document.getElementById('github-form');
  
    const header = {
        'Accept' : 'application/vnd.github.v3+json'
      }

    githubform.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#search');
      console.log(input.value)  
      return fetch(`https://api.github.com/search/users?q=${input.value}`, {headers: header})
  

      .then(response => response.json())
      .then(data => {
        console.log(data)
        const users = document.querySelector('#user-list h4');
        users.addEventListener('click', (event) => {
        return fetch (data.items[0].repos_url) .then (response => response.json()) .then(data => {
            console.log(data)
            data.map(repo => {
                const repoGraph = document.createElement("p")
                repoGraph.innerText = repo.name
                const repos = document.querySelector('#user-list p')
                repos.append(repoGraph)
            })
        })      
      });
      return users.innerText = data.items[0].login;
    });
  })
};
  init()
