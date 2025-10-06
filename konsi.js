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

function filterTopics() {
    // 1. Pega o valor digitado na barra de pesquisa e transforma em letras minúsculas.
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();

    // 2. Pega todos os elementos dos tópicos.
    const topics = document.getElementsByClassName('info-box');

    // 3. Itera sobre cada tópico para verificar se deve ser exibido.
    for (let i = 0; i < topics.length; i++) {
        const topic = topics[i];
        
        // Pega o texto do tópico (também em minúsculas)
        const topicText = topic.textContent || topic.innerText; 
        
        // Verifica se o texto do tópico inclui o texto da pesquisa
        if (topicText.toLowerCase().indexOf(filter) > -1) {
            // Se encontrar, garante que o tópico esteja visível
            topic.style.display = ""; // Volta ao display padrão do CSS (grid item)
        } else {
            // Se NÃO encontrar, esconde o tópico
            topic.style.display = "none";
        }
    }
}
