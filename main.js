$(document).ready(function () {

    $('form').validate({
        rules: {
        
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, ensira seu nome',
            email: 'Ensira seu e-mail corretamente',
            mensagem: 'Escreva sua mensagem.',
        },
        
        submitHandler: function(form) {
            console.log(form)
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert (`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})