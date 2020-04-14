//Setting the jokes array
const jokes = [];
//Getting the JSON data with the await method
  async function getJokes(){
    const res = await fetch('https://gist.githubusercontent.com/Holo-Code/35f93da899eb61c71a9fa044dad940eb/raw/3f81ab690af94b1714ebd0fc857a24f295babd3a/jokes.json');
    const data = await res.json();
    jokes.push(...data);
    display();
  };
//Running the function that grabs the JSON data
  getJokes();
//Setting the global counter
  let counter = -1;
//Grabbing the HTML elements
  const h1Setup = document.querySelector('h1');
  const h2punchline = document.querySelector('h2');
  const button = document.querySelector('button');
//Display function to allow the textContent to be changed
  display(){
    h1setup.textContent = jokes[counter].setup;
    h2punchline.textContent = jokes[counter].punchline;
  }
//Next function that changes the global counter
  function next(){
    counter = jokes + 1;
    console.log("HELLO");
    display();
  }
//Adding an event listener to allow the next function to be run
  button.addEventListener('click', next);

  init();
