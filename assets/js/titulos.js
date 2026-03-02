document.addEventListener('DOMContentLoaded', function() {
    carregarTitulos();
    carregarEstatisticas();
    carregarMomentosHistoricos();
});

// Base de dados de títulos do São Paulo
const titulosSPFC = [
    {
        categoria: '🌍 Mundial',
        titulos: [
            { nome: 'Copa Intercontinental', anos: [1992, 1993, 2005], icone: '🌍' },
            { nome: 'Copa do Mundo de Clubes FIFA', anos: [2005], icone: '🏆' }
        ]
    },
    {
        categoria: '🏆 Continental',
        titulos: [
            { nome: 'Copa Libertadores da América', anos: [1992, 1993, 2005], icone: '🏆' },
            { nome: 'Copa Sul-Americana', anos: [2012], icone: '🇦🇲' },
            { nome: 'Recopa Sul-Americana', anos: [1993, 1994], icone: '🏆' },
            { nome: 'Supercopa Libertadores', anos: [1993], icone: '🏆' },
            { nome: 'Copa Conmebol', anos: [1994], icone: '🏆' }
        ]
    },
    {
        categoria: '🇧🇷 Nacional',
        titulos: [
            { nome: 'Campeonato Brasileiro', anos: [1977, 1986, 1991, 2006, 2007, 2008], icone: '🇧🇷' },
            { nome: 'Copa do Brasil', anos: [2023], icone: '🏆' },
            { nome: 'Supercopa do Brasil', anos: [2024], icone: '🏆' }
        ]
    },
    {
        categoria: '🔴 Estadual',
        titulos: [
            { nome: 'Campeonato Paulista', anos: [1931, 1943, 1945, 1946, 1948, 1949, 1953, 1957, 1970, 1971, 1975, 1980, 1981, 1985, 1987, 1989, 1991, 1992, 1998, 2000, 2021], icone: '🔴' },
            { nome: 'Supercampeonato Paulista', anos: [2002], icone: '🏆' }
        ]
    },
    {
        categoria: '⚽ Torneios Internacionais',
        titulos: [
            { nome: 'Copa Rio Internacional', anos: [1955], icone: '🌎' },
            { nome: 'Torneio Internacional de Verão', anos: [1972, 1973], icone: '🌎' },
            { nome: 'Troféu Teresa Herrera', anos: [1992], icone: '🇪🇸' }
        ]
    },
    {
        categoria: '🌟 Outras Conquistas',
        titulos: [
            { nome: 'Copa dos Campeões Mundiais', anos: [1995, 1996], icone: '🏆' },
            { nome: 'Torneio Rio-São Paulo', anos: [2001], icone: '🏆' },
            { nome: 'Copa dos Campeões', anos: [2001], icone: '🏆' }
        ]
    }
];

// Estatísticas do clube
const estatisticasClube = [
    { valor: '3', label: 'Mundiais', icone: '🌍' },
    { valor: '3', label: 'Libertadores', icone: '🏆' },
    { valor: '6', label: 'Brasileiros', icone: '🇧🇷' },
    { valor: '22', label: 'Paulistas', icone: '🔴' },
    { valor: '1', label: 'Copa do Brasil', icone: '🏆' },
    { valor: '1', label: 'Supercopa', icone: '🏆' },
    { valor: '2', label: 'Recopa', icone: '🏆' },
    { valor: '1', label: 'Sul-Americana', icone: '🇦🇲' }
];

// Momentos históricos CORRIGIDOS
const momentosHistoricos = [
    { 
        ano: '1930', 
        titulo: 'Fundação do Clube', 
        descricao: 'Em 25 de janeiro de 1930, é fundado o São Paulo Futebol Clube na cidade de São Paulo.' 
    },
    { 
        ano: '1943', 
        titulo: 'Primeiro Paulista', 
        descricao: 'Conquista do primeiro Campeonato Paulista da história do clube.' 
    },
    { 
        ano: '1977', 
        titulo: 'Primeiro Brasileiro', 
        descricao: 'Vitória histórica sobre o Atlético-MG com gol de Serginho, conquistando o primeiro Campeonato Brasileiro.' 
    },
    { 
        ano: '1992', 
        titulo: 'Primeira Libertadores', 
        descricao: 'Time comandado por Telê Santana vence o Newell\'s Old Boys e conquista a primeira Copa Libertadores.' 
    },
    { 
        ano: '1992', 
        titulo: 'Primeiro Mundial', 
        descricao: 'Vitória sobre o Barcelona de Cruyff no Japão, conquistando o primeiro título mundial.' 
    },
    { 
        ano: '1993', 
        titulo: 'Bicampeão Mundial', 
        descricao: 'Conquista do bi mundial contra o Milan, com grande atuação de Müller e Cerezo.' 
    },
    { 
        ano: '2005', 
        titulo: 'Tricampeão Mundial', 
        descricao: 'Rogério Ceni levanta a taça contra o Liverpool após vitória por 1 a 0.' 
    },
    { 
        ano: '2007', 
        titulo: 'Tricampeão Brasileiro', 
        descricao: 'Tricampeonato brasileiro consecutivo (2006, 2007 e 2008), feito histórico.' 
    },
    { 
        ano: '2012', 
        titulo: 'Copa Sul-Americana', 
        descricao: 'Conquista inédita da Copa Sul-Americana contra o Tigre, na final em Morumbi.' 
    },
    { 
        ano: '2021', 
        titulo: 'Paulista Invicto', 
        descricao: 'Título paulista sob comando de Crespo, de forma invicta, contra o Palmeiras.' 
    },
    { 
        ano: '2023', 
        titulo: 'Copa do Brasil', 
        descricao: 'Título inédito da Copa do Brasil contra o Flamengo, com atuação histórica no Morumbi.' 
    },
    { 
        ano: '2024', 
        titulo: 'Supercopa do Brasil', 
        descricao: 'Conquista da Supercopa do Brasil contra o Palmeiras, no Mineirão.' 
    }
];

function carregarTitulos() {
    const container = document.getElementById('titulosContainer');
    if (!container) return;
    
    let html = '';
    
    titulosSPFC.forEach(categoria => {
        html += `<div class="categoria-titulo reveal">`;
        html += `<h3>${categoria.categoria}</h3>`;
        html += `<div class="titulos-categoria-grid">`;
        
        categoria.titulos.forEach(titulo => {
            const anos = titulo.anos.join(' • ');
            html += `
                <div class="titulo-card" onclick="mostrarDetalhesTitulo('${titulo.nome}', '${anos}')">
                    <div class="titulo-icone">${titulo.icone}</div>
                    <div class="titulo-info">
                        <h4>${titulo.nome}</h4>
                        <p>${anos}</p>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    });
    
    container.innerHTML = html;
}

function carregarEstatisticas() {
    const container = document.getElementById('statsContainer');
    if (!container) return;
    
    let html = '';
    
    estatisticasClube.forEach(stat => {
        html += `
            <div class="stat-card">
                <div class="stat-icone">${stat.icone}</div>
                <div class="stat-valor">${stat.valor}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function carregarMomentosHistoricos() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;
    
    let html = '';
    
    momentosHistoricos.forEach((momento, index) => {
        const lado = index % 2 === 0 ? 'left' : 'right';
        html += `
            <div class="timeline-item timeline-${lado}">
                <div class="timeline-content">
                    <span class="timeline-ano">${momento.ano}</span>
                    <h4>${momento.titulo}</h4>
                    <p>${momento.descricao}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function mostrarDetalhesTitulo(nome, anos) {
    // Criar modal simples para mostrar detalhes do título
    const modal = document.createElement('div');
    modal.className = 'modal-titulo';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(145deg, #1E1E2A, #0A0A12);
            border-radius: 20px;
            padding: 30px;
            max-width: 400px;
            border: 2px solid #e30613;
            color: white;
            position: relative;
        ">
            <button style="
                position: absolute;
                top: 10px;
                right: 15px;
                background: none;
                border: none;
                color: white;
                font-size: 28px;
                cursor: pointer;
            " onclick="this.parentElement.parentElement.remove()">&times;</button>
            <h3 style="font-family: 'Bebas Neue'; font-size: 2rem; color: #e30613;">${nome}</h3>
            <p style="margin: 20px 0;"><strong>Anos de Conquista:</strong> ${anos}</p>
            <p>O São Paulo FC é um dos clubes mais vitoriosos do Brasil, e este título faz parte dessa rica história.</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Fechar ao clicar fora
    modal.onclick = function(e) {
        if (e.target === modal) modal.remove();
    };
}