fetch("http://localhost:3000/notes/")
  .then((response) => response.json())
  .then((json) => console.log(json));