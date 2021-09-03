$( document ).ready(function() {
    
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            console.log(result);
        }
    });

});
