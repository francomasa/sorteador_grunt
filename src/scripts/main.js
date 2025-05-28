document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        //Prevenir que o formulario atualize a pagina
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);
        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        /**
         * Função Math
         * Math.random() // Para Obtener numero random
         * Math.ceil(numeroAleatorio); // Arredondar numero decimal para o entero maior
         * Math.round(numeroAleatorio); // Arredondar numero decimal para o entero menor se o decimal for menor de ,5 e para o entero maior se for maior de ,5
         * Math.floor(numeroAleatorio); // Arredondar numero decimal para o entero menor
         */
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})