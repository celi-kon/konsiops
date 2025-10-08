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
    
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();

    
    const topics = document.querySelectorAll('.info-box, .info-box1'); /* pegando info css */

    
    for (let i = 0; i < topics.length; i++) {
        const topic = topics[i];
        
       
        const topicText = topic.textContent || topic.innerText; 
        
        
        if (topicText.toLowerCase().indexOf(filter) > -1) {
            
            topic.style.display = "";
        } else {
            
            topic.style.display = "none";
        }
    }
}
