fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => console.log(json));

fetch("https://jsonplaceholder.typicode.com/todos", {
    method: 'POST',
    body: JSON.stringify({
        title: "Wash the dishes",
        completed: false
    }),
    headers: {
        "Content-type": "application/json"
    }
})
.then(response => response.json())
.then(json => console.log(json));

async function getUser(id) 
{
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let data = await response.json()
    return data;
}

getUser(10).then((data) => console.log(data));