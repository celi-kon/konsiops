document.addEventListener('DOMContentLoaded', function() {
    const titulosClicaveis = document.querySelectorAll('.info-box h2, .info-box1 h2');

    titulosClicaveis.forEach(titulo => {
        titulo.addEventListener('click', function() {
            const infoBox = this.closest('.info-box') || this.closest('.info-box1');

            if (infoBox) {
                infoBox.classList.toggle('active');
            }
        });
    });
});