// Este código debe ir en tu archivo logic.js
document.addEventListener("DOMContentLoaded", function() {
    // 1. Crear el elemento de audio si no existe en la página actual
    if (!document.getElementById('global-audio')) {
        const audio = document.createElement('audio');
        audio.id = 'global-audio';
        audio.loop = true;
        audio.src = (window.location.pathname.includes('/juegos/')) ? '../musica/nuestra-cancion.mp3' : 'musica/nuestra-cancion.mp3';
        document.body.appendChild(audio);
    }

    const globalAudio = document.getElementById('global-audio');

    // 2. Verificar el estado en cada carga de página
    if (localStorage.getItem('musicStatus') === 'playing') {
        globalAudio.play().catch(e => console.log("Esperando interacción para sonar..."));
    }
});