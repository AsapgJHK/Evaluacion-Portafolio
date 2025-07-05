$(document).ready(function() {
    
    const backgroundMusic = $('#backgroundMusic')[0];
    backgroundMusic.volume = 0.3;

    const hoverSoundImg = $('#hoverSoundImg')[0];
    const hoverSoundCard = $('#hoverSoundCard')[0];
    const clickSoundGeneral = $('#clickSoundGeneral')[0];

    
    if (hoverSoundImg) {
        hoverSoundImg.volume = 0.7;
    }
    if (hoverSoundCard) {
        hoverSoundCard.volume = 0.7;
    }
    if (clickSoundGeneral) {
        clickSoundGeneral.volume = 0.5;
    }

    
    function playSound(audioElement) {
        if (audioElement) {
            audioElement.currentTime = 0;
            audioElement.play().catch(e => console.log("Error al reproducir sonido:", e));
        }
    }

   
    $('.titulo-principal').delay(4000).animate({ opacity: 1 }, 14000);

    
    $('.texto-descripcion').delay(17000).animate({ opacity: 1 }, 7000);
    setTimeout(function() {
        $('.seccion-bienvenida .enlace-icono .icono-social').hover(
            function() {
                // Pequeño umbral para permitir el sonido mientras aparece
                if (parseFloat($(this).css('opacity')) > 0.1) {
                    if (hoverSoundImg) {
                        hoverSoundImg.currentTime = 0;
                        hoverSoundImg.play().catch(e => console.log("Error al reproducir sonido de icono social:", e));
                    }
                }
            },
            function() {
                
            }
        );
    }, 17000); 

   
    $('.seccion-bienvenida .img-fluid').delay(23000).animate({ opacity: 1 }, 3000);

   
    $('.seccion-bienvenida .img-fluid').delay(24000).hover(
        function() {
            // Reproducir sonido solo si la opacidad es mayor que un umbral bajo
            if (parseFloat($(this).css('opacity')) > 0.1) {
                if (hoverSoundImg) {
                    hoverSoundImg.currentTime = 0;
                    hoverSoundImg.play().catch(e => console.log("Error al reproducir sonido de imagen:", e));
                }
            }
        },
        function() {
            // El CSS maneja los efectos visuales al quitar el hover
        }
    );

   
    $('#startExperienceButton').on('click', function() {
        playSound(clickSoundGeneral);
        $(this).fadeOut(0, function() {
            $(this).remove();
        });

        if (backgroundMusic.paused) {
            backgroundMusic.play()
                .then(() => {
                    $('#toggleMusicButton').text('Pausar Música');
                })
                .catch(error => {
                    console.error("Error al intentar reproducir la música inicial:", error);
                });
        }
        $('body').removeClass('overlay-active');
    });

    
    $('#toggleMusicButton').on('click', function() {
        playSound(clickSoundGeneral);
        if (backgroundMusic.paused) {
            backgroundMusic.play()
                .then(() => {
                    $(this).text('Pausar Música');
                })
                .catch(error => {
                    console.error("Error al intentar reproducir la música:", error);
                    alert("El navegador bloqueó la reproducción automática de la música. Haz clic de nuevo.");
                });
        } else {
            backgroundMusic.pause();
            $(this).text('Reproducir Música');
        }
    });

    
    $('.enlace-icono').on('click', function() {
        playSound(clickSoundGeneral);
    });

    
    $('.imagen-bienvenida .img-fluid').on('click', function() {
        playSound(clickSoundGeneral);
    });

    
    $('.tarjeta-proyecto').hover(
        function() {
            $(this).css('border', '7px solid rgb(0, 255, 26)');
            if (hoverSoundCard) {
                hoverSoundCard.currentTime = 0;
                hoverSoundCard.play().catch(e => console.log("Error al reproducir sonido de tarjeta:", e));
            }
        },
        function() {
            $(this).css('border', '7px solid #F2994A');
        }
    );

    
    $('body').addClass('overlay-active');
});