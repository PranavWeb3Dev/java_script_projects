document.addEventListener('DOMContentLoaded', () => {
    let getJoke = document.getElementById("get-joke")
  let displayJoke = document.getElementById("display-joke-col");
  let loadMore = document.getElementById("load-more");
    let pagination = 1;
    getJoke.addEventListener('click', async () => {
        let joke = await getAllJoke();
        displayAllJoke(joke);
      console.log("Hello From Joke")
    })
  loadMore.addEventListener('click', async (e) => {
    e.preventDefault();
    pagination++;
    let joke = await getAllJoke();
    displayAllJoke(joke);
  })

  async function getAllJoke() {
    try {
      let url = `https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=${pagination}`;

      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Jokes Not Found");
      } 
      let jokes = await response.json();
      console.log(jokes);
      return jokes
    } catch(err) {
      console.log('Jokes Not Found....', err.message);
        }
    }
  function displayAllJoke(joke) {
    if (!joke) return; 
    let jokeArr = joke.data.data;
    const fargment = document.createDocumentFragment();
    jokeArr.forEach((joke) => {
      const p = document.createElement("p");
      p.textContent = joke.content;
      p.dataset.id = joke.id;
      fargment.appendChild(p);
    })
    displayJoke.appendChild(fargment);
  }
})