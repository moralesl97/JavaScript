// $(document).ready(function(){
//     $("#consultarBtn").click(function (){
//         var id = $("#idUsuario").val();
//         fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then(response => response.json())
//         .then(json => {
//             $("#name").val(json.name);
//             $("#email").val(json.email);  
//         })
//     });
// });

function consultaUsuario(){
    let id = document.getElementById("idUsuario").value;
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => {
            name.value = json.name;
            email.value = json.email;  
        })
        .catch((error) => {
            console.error('Error:', error);
        });
;
}