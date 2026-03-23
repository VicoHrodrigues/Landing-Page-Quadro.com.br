document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.querySelector('.lang--linguage--select');

    if (langSelect) {
        langSelect.addEventListener('change', (event) => {
            const lang = event.target.value;
            
            // Verifica onde estamos agora
            const path = window.location.pathname;
            const isInsidePages = path.includes('/src/pages/');

            // Mapeamento com os nomes exatos da sua foto
            const fileMap = {
                'pt': 'index.html',
                'en-us': 'ingles.html',
                'es-es': 'espanhol.html',
                'it-it': 'italiano.html',
                'fr-fr': 'frances.html'
            };

            let destination = "";

            if (lang === 'pt') {
                // Se está em /src/pages/ e quer ir para o index, volta dois níveis (../../)
                destination = isInsidePages ? '../../index.html' : 'index.html';
            } else {
                // Se está no index e quer ir para uma língua, entra em src/pages/
                destination = isInsidePages ? fileMap[lang] : 'src/pages/' + fileMap[lang];
            }

            window.location.href = destination;
        });
    }
});