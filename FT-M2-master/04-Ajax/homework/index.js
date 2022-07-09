$('#boton').click(() => {
    let lista = $('#lista');
    lista.empty();
    $.ajax({
        url:'http://localhost:5000/amigos',
        type:'GET' ,
        success:(friends) => {
            for(let i = 0; i<friends.length; i++){
                lista.append(`<li>${friends[i].name}</li>`);
            }
            alert(`fue eliminado con exito!`)
        }
    })
})

$('#search').click(() => {
    let input = $('#input').val();
    let span = $('#amigo');
    
    $.ajax({
        url: `http://localhost:5000/amigos/${input}`,
        type: 'GET',
        success: (friends) => { 
            span.text(friends.name); 
        },
    });
})

$('#delete').click(() => {
    let input = $('#inputDelete').val();
    var amigo = $('#success')
    $.ajax({
        url: `http://localhost:5000/amigos/${input}`,
        type: 'DELETE',
        seccess: (data) => {}
    })
})