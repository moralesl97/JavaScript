$(document).ready(function(){
    $("#consultarBtn").click(function (){
        var id = $("#idUsuario").val();
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users/" + id,
            contentType: "application/json",
            dataType: 'json',
            beforeSend: function(){
                $("#wait").text("Searching for User");
            },
            success: function(result){
                $("#wait").text("");
                $("#name").val(result.name);
                $("#email").val(result.email);
            },
            error: function(result){
                console.log("La llamada no se pudo completar");
                console.log(result);
            }
        });
    });
});