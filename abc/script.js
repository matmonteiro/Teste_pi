//FUNÇÃO PARA FECHAR QUANDO ESTIVER NO MODO CELULAR



$(document).ready(function () {

    $('#navbarToggle').on('click', function () {

        $('#navbarNav').toggleClass('show');

    });



    $('.navbar-nav a').on('click', function () {

        $('#navbarNav').removeClass('show');

    });

});





//FUNÇÃO PARA FAZER UMA ROLAGEM DA PAGINA MAIS SUAVE

$(document).ready(function () {

    // Adiciona rolagem suave ao clicar nos links da barra de navegação

    $("#scrollCategorias, #scrollSobre, #scrollEquipe").on("click", function (e) {

        e.preventDefault();

        var targetId = $(this).attr("href");

        $("html, body").animate({

            scrollTop: $(targetId).offset().top

        }, 1000); // Tempo da animação em milissegundos (1 segundo)

    });

});





//FUÇÃO DAS FOTOS DA EQUIPE 



// JavaScript para controlar a navegação da equipe

document.addEventListener('DOMContentLoaded', function () {

    const membrosEquipe = document.querySelectorAll('.equipe-item');

    const anterior = document.getElementById('anterior');

    const proximo = document.getElementById('proximo');

    let indiceMembroAtual = 0;

    const membrosPorPagina = 3;



    function exibirMembros(inicio, fim) {

        for (let i = 0; i < membrosEquipe.length; i++) {

            if (i >= inicio && i < fim) {

                membrosEquipe[i].style.display = 'block';

            } else {

                membrosEquipe[i].style.display = 'none';

            }

        }

    }



    function mostrarProximosMembros() {

        const proximoInicio = indiceMembroAtual + membrosPorPagina;

        const proximoFim = proximoInicio + membrosPorPagina;

        if (proximoFim <= membrosEquipe.length) {

            exibirMembros(proximoInicio, proximoFim);

            indiceMembroAtual = proximoInicio;

        } else {

            // Volte ao início se estiver no final da lista

            exibirMembros(0, membrosPorPagina);

            indiceMembroAtual = 0;

        }

    }



    function mostrarMembrosAnteriores() {

        const anteriorInicio = indiceMembroAtual - membrosPorPagina;

        if (anteriorInicio >= 0) {

            const anteriorFim = anteriorInicio + membrosPorPagina;

            exibirMembros(anteriorInicio, anteriorFim);

            indiceMembroAtual = anteriorInicio;

        } else {

            // Vá para o final se estiver no início da lista

            const finalInicio = membrosEquipe.length - membrosPorPagina;

            const finalFim = membrosEquipe.length;

            exibirMembros(finalInicio, finalFim);

            indiceMembroAtual = finalInicio;

        }

    }



    exibirMembros(0, membrosPorPagina);



    proximo.addEventListener('click', mostrarProximosMembros);

    anterior.addEventListener('click', mostrarMembrosAnteriores);

});



$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});