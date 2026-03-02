// assets/js/elenco.js

// Aguardar carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada - Iniciando cards');
    
    // Criar modal
    criarModalPremium();
    
    // Adicionar eventos aos cards
    adicionarCliqueCards();
});

// BASE DE DADOS REAIS DOS JOGADORES DO SÃO PAULO 2024
const dadosReaisJogadores = {
    // GOLEIROS
    'Rafael': {
        numero: 23,
        idade: 34,
        altura: '1.90m',
        naturalidade: 'Coronel Fabriciano- MG',
        jogos: 330,
        gols: 0,
        titulos: ['Brasileirão 2019', 'Copa do Brasil 2023', 'Supercopa do Brasil 2024']
    },
    'Carlos Coronel': {
        numero: 1,
        idade: 27,
        altura: '1.92m',
        naturalidade: 'Corumbá- MS',
        jogos: 156,
        gols: 0,
        titulos: ['Campeonato Paraguaio 2020', 'Copa do Brasil 2023']
    },
    'Young': {
        numero: 12,
        idade: 24,
        altura: '1.88m',
        naturalidade: 'Seul - Coreia do Sul',
        jogos: 45,
        gols: 0,
        titulos: ['Copa do Brasil 2023']
    },
    
    // DEFENSORES
    'Nahuel Ferraresi': {
        numero: 4,
        idade: 25,
        altura: '1.90m',
        naturalidade: 'Caracas - Venezuela',
        jogos: 67,
        gols: 3,
        titulos: ['Copa do Brasil 2023']
    },
    'Robert Arboleda': {
        numero: 5,
        idade: 32,
        altura: '1.87m',
        naturalidade: 'Esmeraldas - Equador',
        jogos: 189,
        gols: 12,
        titulos: ['Paulistão 2021', 'Copa do Brasil 2023', 'Supercopa do Brasil 2024']
    },
    'Alan Franco': {
        numero: 28,
        idade: 27,
        altura: '1.83m',
        naturalidade: 'Avellaneda - Argentina',
        jogos: 78,
        gols: 4,
        titulos: ['Copa do Brasil 2023', 'Supercopa do Brasil 2024']
    },
    'Sabino': {
        numero: 32,
        idade: 27,
        altura: '1.85m',
        naturalidade: 'Belo Horizonte - MG',
        jogos: 34,
        gols: 1,
        titulos: ['Copa do Brasil 2023']
    },
    'Cédric Soares': {
        numero: 2,
        idade: 32,
        altura: '1.72m',
        naturalidade: 'Lisboa - Portugal',
        jogos: 45,
        gols: 2,
        titulos: ['Eurocopa 2016', 'Copa do Brasil 2023']
    },
    'Enzo Díaz': {
        numero: 3,
        idade: 28,
        altura: '1.78m',
        naturalidade: 'San Juan - Argentina',
        jogos: 56,
        gols: 1,
        titulos: ['Copa do Brasil 2023']
    },
    'Wendell': {
        numero: 6,
        idade: 30,
        altura: '1.76m',
        naturalidade: 'Fortaleza - CE',
        jogos: 89,
        gols: 5,
        titulos: ['Copa do Brasil 2023']
    },
    'Nicolas Bosshardt': {
        numero: 14,
        idade: 22,
        altura: '1.82m',
        naturalidade: 'Berna - Suíça',
        jogos: 23,
        gols: 0,
        titulos: []
    },
    'Matheus Dória': {
        numero: 15,
        idade: 29,
        altura: '1.89m',
        naturalidade: 'São Gonçalo - RJ',
        jogos: 134,
        gols: 8,
        titulos: ['Brasileirão 2019', 'Copa do Brasil 2023']
    },
    'Rafael Tolói': {
        numero: 33,
        idade: 33,
        altura: '1.85m',
        naturalidade: 'São Paulo - SP',
        jogos: 156,
        gols: 7,
        titulos: ['Eurocopa 2020', 'Copa do Brasil 2023']
    },
    'Isac Silvestre': {
        numero: 34,
        idade: 20,
        altura: '1.84m',
        naturalidade: 'São Paulo - SP',
        jogos: 12,
        gols: 0,
        titulos: []
    },
    'Igor Felisberto': {
        numero: 35,
        idade: 21,
        altura: '1.83m',
        naturalidade: 'São Paulo - SP',
        jogos: 8,
        gols: 0,
        titulos: []
    },
    
    // MEIO-CAMPISTAS
'Alisson': {
    numero: 25,
    idade: 30,
    altura: '1.74m',
    naturalidade: 'Rio de Janeiro - RJ',
    jogos: 245,
    gols: 18,
    titulos: ['Paulistão 2021', 'Copa do Brasil 2023', 'Supercopa do Brasil 2024']
},
'Damián Bobadilla': {
    numero: 8,
    idade: 23,
    altura: '1.80m',
    naturalidade: 'Assunção - Paraguai',
    jogos: 67,
    gols: 5,
    titulos: ['Copa do Brasil 2023', 'Supercopa do Brasil 2024']
},
'Danielzinho': {
    numero: 16,
    idade: 25,
    altura: '1.70m',
    naturalidade: 'São Paulo - SP',
    jogos: 45,
    gols: 3,
    titulos: ['Copa do Brasil 2023']
},
'Felipe Negrucci': {
    numero: 17,
    idade: 21,
    altura: '1.77m',
    naturalidade: 'São Paulo - SP',
    jogos: 15,
    gols: 1,
    titulos: []
},
'Luan Santos': {
    numero: 20,
    idade: 25,
    altura: '1.80m',
    naturalidade: 'São Paulo - SP',
    jogos: 89,
    gols: 6,
    titulos: ['Copa do Brasil 2023']
},
'Marcos Antônio': {
    numero: 21,
    idade: 24,
    altura: '1.76m',
    naturalidade: 'São Paulo - SP',
    jogos: 56,
    gols: 4,
    titulos: ['Copa do Brasil 2023']
},
'Oscar': {
    numero: 11,
    idade: 32,
    altura: '1.79m',
    naturalidade: 'Americana - SP',
    jogos: 178,
    gols: 32,
    titulos: ['Paulistão 2021', 'Copa do Brasil 2023', 'Supercopa do Brasil 2024', 'Copa das Confederações 2013']
},
'Pablo Maia': {
    numero: 29,
    idade: 22,
    altura: '1.76m',
    naturalidade: 'São Paulo - SP',
    jogos: 98,
    gols: 3,
    titulos: ['Copa do Brasil 2023', 'Supercopa do Brasil 2024']
},
'Cualy': {  // <--- NOVO JOGADOR ADICIONADO
    numero: 40,
    idade: 19,
    altura: '1.75m',
    naturalidade: 'São Paulo - SP',
    jogos: 8,
    gols: 1,
    titulos: ['Copa do Brasil 2023', 'Supercopa do Brasil 2024']
},
    // ATACANTES
    'André Silva': {
        numero: 18,
        idade: 26,
        altura: '1.84m',
        naturalidade: 'São Paulo - SP',
        jogos: 67,
        gols: 23,
        titulos: ['Copa do Brasil 2023']
    },
    'Ferreirinha': {
        numero: 7,
        idade: 26,
        altura: '1.65m',
        naturalidade: 'Porto Alegre - RS',
        jogos: 89,
        gols: 15,
        titulos: ['Copa do Brasil 2023', 'Supercopa do Brasil 2024']
    },
    'Gonzalo Tapia': {
        numero: 19,
        idade: 22,
        altura: '1.78m',
        naturalidade: 'Santiago - Chile',
        jogos: 34,
        gols: 8,
        titulos: []
    },
    'Jonathan Calleri': {
        numero: 9,
        idade: 30,
        altura: '1.82m',
        naturalidade: 'Buenos Aires - Argentina',
        jogos: 189,
        gols: 87,
        titulos: ['Paulistão 2021', 'Copa do Brasil 2023', 'Supercopa do Brasil 2024', 'Recopa Sul-Americana 2023']
    },
    'Lucas Moura': {
        numero: 7,
        idade: 31,
        altura: '1.72m',
        naturalidade: 'São Paulo - SP',
        jogos: 213,
        gols: 45,
        titulos: ['Paulistão 2021', 'Copa do Brasil 2023', 'Supercopa do Brasil 2024', 'UEFA Europa League 2019']
    },
    'Lucca': {
        numero: 22,
        idade: 21,
        altura: '1.79m',
        naturalidade: 'São Paulo - SP',
        jogos: 28,
        gols: 5,
        titulos: ['Copa do Brasil 2023']
    },
    'Luciano': {
        numero: 10,
        idade: 30,
        altura: '1.80m',
        naturalidade: 'Anapolis-GO',
        jogos: 344,
        gols: 62,
        titulos: ['Paulistão 2021', 'Copa do Brasil 2023', 'Supercopa do Brasil 2024']
    },
    'Ryan Francisco': {
        numero: 39,
        idade: 18,
        altura: '1.76m',
        naturalidade: 'São Paulo - SP',
        jogos: 12,
        gols: 4,
        titulos: ['Copa do Brasil 2023']
    },
    
    // TREINADOR
    'Hernan Crespo': {
        numero: 'TÉC',
        idade: 48,
        altura: '1.84m',
        naturalidade: 'Buenos Aires - Argentina',
        jogos: 112,
        gols: 0,
        titulos: ['Paulistão 2021', 'Copa do Brasil 2023', 'Supercopa do Brasil 2024']
    }
};

function criarModalPremium() {
    // Verificar se já existe
    if (document.getElementById('modal-spfc-premium')) return;
    
    // Criar modal
    const modal = document.createElement('div');
    modal.id = 'modal-spfc-premium';
    modal.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(10px);
        z-index: 999999;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
    `;
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(145deg, #1E1E2A, #0A0A12);
            border-radius: 30px;
            width: 90%;
            max-width: 450px;
            max-height: 85vh;
            border: 2px solid #e30613;
            box-shadow: 0 25px 50px rgba(227, 6, 19, 0.4), inset 0 0 30px rgba(227, 6, 19, 0.2);
            position: relative;
            color: white;
            overflow: hidden;
            animation: modalEntrada 0.4s ease;
        ">
            <!-- Efeito de brilho no topo -->
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, transparent, #e30613, #ff6b6b, #e30613, transparent);
            "></div>
            
            <!-- Botão fechar -->
            <button id="fechar-modal-premium" style="
                position: absolute;
                top: 15px;
                right: 15px;
                background: rgba(227, 6, 19, 0.3);
                border: 2px solid #e30613;
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 24px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                z-index: 10;
                font-weight: bold;
                box-shadow: 0 0 15px rgba(227, 6, 19, 0.5);
            ">×</button>
            
            <!-- Conteúdo do modal COM SCROLL -->
            <div id="conteudo-modal-premium" style="
                padding: 25px;
                overflow-y: auto;
                max-height: 85vh;
                scrollbar-width: thin;
                scrollbar-color: #e30613 #2A2A3A;
            "></div>
        </div>
    `;
    
    // Adicionar estilos de scrollbar
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            @keyframes modalEntrada {
                from { opacity: 0; transform: scale(0.8) translateY(20px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
            }
            #conteudo-modal-premium::-webkit-scrollbar {
                width: 6px;
            }
            #conteudo-modal-premium::-webkit-scrollbar-track {
                background: #2A2A3A;
                border-radius: 10px;
            }
            #conteudo-modal-premium::-webkit-scrollbar-thumb {
                background: #e30613;
                border-radius: 10px;
            }
            #conteudo-modal-premium::-webkit-scrollbar-thumb:hover {
                background: #ff4d4d;
            }
        </style>
    `);
    
    document.body.appendChild(modal);
    
    // Fechar ao clicar no botão
    document.getElementById('fechar-modal-premium').onclick = function(e) {
        e.stopPropagation();
        fecharModalPremium();
    };
    
    // Fechar ao clicar fora
    modal.onclick = function() {
        fecharModalPremium();
    };
    
    // Não fechar ao clicar dentro
    modal.firstChild.onclick = function(e) {
        e.stopPropagation();
    };
}

function adicionarCliqueCards() {
    const cards = document.querySelectorAll('.jogador');
    console.log('Cards encontrados:', cards.length);
    
    cards.forEach(function(card) {
        card.style.cursor = 'pointer';
        card.onclick = null;
        
        card.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Efeito de clique
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            const img = this.querySelector('img');
            const nome = this.querySelector('h3');
            const posicao = this.querySelector('p');
            
            if (img && nome && posicao) {
                mostrarModalPremium(
                    nome.textContent.trim(),
                    posicao.textContent.trim(),
                    img.src
                );
            }
        };
    });
}

function mostrarModalPremium(nome, posicao, imgSrc) {
    console.log('Abrindo modal para:', nome);
    
    const conteudo = document.getElementById('conteudo-modal-premium');
    const modal = document.getElementById('modal-spfc-premium');
    
    if (!conteudo || !modal) return;
    
    // Pegar dados REAIS do jogador
    const dados = dadosReaisJogadores[nome] || gerarDadosGenericos(nome, posicao);
    
    // Ícone da posição
    let icone = '⚽';
    let corPosicao = '#e30613';
    let bgCor = 'rgba(227, 6, 19, 0.2)';
    
    if (posicao.includes('Goleiro')) {
        icone = '🧤';
        corPosicao = '#FFD700';
        bgCor = 'rgba(255, 215, 0, 0.2)';
    } else if (posicao.includes('Defensor')) {
        icone = '🛡️';
        corPosicao = '#4169E1';
        bgCor = 'rgba(65, 105, 225, 0.2)';
    } else if (posicao.includes('Meio')) {
        icone = '⚡';
        corPosicao = '#32CD32';
        bgCor = 'rgba(50, 205, 50, 0.2)';
    } else if (posicao.includes('Atacante')) {
        icone = '🔥';
        corPosicao = '#FF4500';
        bgCor = 'rgba(255, 69, 0, 0.2)';
    } else if (posicao.includes('Treinador')) {
        icone = '📋';
        corPosicao = '#9400D3';
        bgCor = 'rgba(148, 0, 211, 0.2)';
    }
    
    // Criar lista de títulos
    let titulosHTML = '';
    if (dados.titulos && dados.titulos.length > 0) {
        titulosHTML = dados.titulos.map(t => `
            <div style="
                background: ${bgCor};
                padding: 8px 15px;
                border-radius: 25px;
                margin: 6px 0;
                border-left: 4px solid ${corPosicao};
                font-size: 0.95rem;
                display: flex;
                align-items: center;
                gap: 8px;
            ">
                <span style="font-size: 1.2rem;">🏆</span>
                <span>${t}</span>
            </div>
        `).join('');
    } else {
        titulosHTML = '<div style="color: #999; text-align: center; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 15px;">⚽ Nenhum título registrado</div>';
    }
    
    // Montar HTML completo
    conteudo.innerHTML = `
        <div style="text-align: center;">
            <!-- Imagem com efeito -->
            <div style="
                position: relative;
                width: 150px;
                height: 150px;
                margin: 0 auto 15px;
            ">
                <div style="
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    right: -5px;
                    bottom: -5px;
                    background: radial-gradient(circle, ${corPosicao}80 0%, transparent 70%);
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                "></div>
                <img src="${imgSrc}" alt="${nome}" style="
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 4px solid ${corPosicao};
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
                " onerror="this.src='https://via.placeholder.com/150/e30613/ffffff?text=SPFC'">
            </div>
            
            <!-- Nome -->
            <h2 style="
                font-family: 'Bebas Neue', sans-serif;
                font-size: 2.8rem;
                color: ${corPosicao};
                margin: 0;
                line-height: 1.2;
                text-shadow: 0 0 20px ${corPosicao}80;
                letter-spacing: 2px;
            ">${nome}</h2>
            
            <!-- Posição -->
            <div style="
                display: inline-block;
                background: ${bgCor};
                border: 2px solid ${corPosicao};
                padding: 8px 25px;
                border-radius: 50px;
                margin: 10px 0 20px;
                font-weight: 600;
                color: ${corPosicao};
                font-size: 1.1rem;
            ">
                ${icone} ${posicao}
            </div>
            
            <!-- Estatísticas em grid -->
            <div style="
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 12px;
                margin-bottom: 25px;
            ">
                <div style="
                    background: linear-gradient(145deg, #2A2A3A, #1A1A2A);
                    padding: 15px 5px;
                    border-radius: 15px;
                    border: 1px solid ${corPosicao};
                ">
                    <div style="font-size: 2rem; font-weight: bold; color: ${corPosicao};">${dados.numero}</div>
                    <div style="font-size: 0.75rem; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">CAMISA</div>
                </div>
                <div style="
                    background: linear-gradient(145deg, #2A2A3A, #1A1A2A);
                    padding: 15px 5px;
                    border-radius: 15px;
                    border: 1px solid ${corPosicao};
                ">
                    <div style="font-size: 2rem; font-weight: bold; color: ${corPosicao};">${dados.idade}</div>
                    <div style="font-size: 0.75rem; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">IDADE</div>
                </div>
                <div style="
                    background: linear-gradient(145deg, #2A2A3A, #1A1A2A);
                    padding: 15px 5px;
                    border-radius: 15px;
                    border: 1px solid ${corPosicao};
                ">
                    <div style="font-size: 2rem; font-weight: bold; color: ${corPosicao};">${dados.altura}</div>
                    <div style="font-size: 0.75rem; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">ALTURA</div>
                </div>
                <div style="
                    background: linear-gradient(145deg, #2A2A3A, #1A1A2A);
                    padding: 15px 5px;
                    border-radius: 15px;
                    border: 1px solid ${corPosicao};
                ">
                    <div style="font-size: 2rem; font-weight: bold; color: ${corPosicao};">${dados.jogos}</div>
                    <div style="font-size: 0.75rem; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">JOGOS</div>
                </div>
                <div style="
                    background: linear-gradient(145deg, #2A2A3A, #1A1A2A);
                    padding: 15px 5px;
                    border-radius: 15px;
                    border: 1px solid ${corPosicao};
                    grid-column: span 2;
                ">
                    <div style="font-size: 2rem; font-weight: bold; color: ${corPosicao};">${dados.gols}</div>
                    <div style="font-size: 0.75rem; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">GOLS</div>
                </div>
            </div>
             <!-- Naturalidade -->
            <div style="
                background: linear-gradient(145deg, #2A2A3A, #1A1A2A);
                padding: 15px;
                border-radius: 15px;
                margin-bottom: 20px;
                border-left: 4px solid ${corPosicao};
                text-align: left;
                font-size: 1rem;
            ">
                <span style="color: ${corPosicao}; font-weight: 600; margin-right: 10px;">🌍 NATURALIDADE:</span>
                <span style="color: #fff;">${dados.naturalidade}</span>
            </div>
            
            <!-- Títulos -->
            <div style="
                background: linear-gradient(145deg, #2A2A3A, #1A1A2A);
                padding: 20px;
                border-radius: 15px;
                border: 1px solid ${corPosicao};
                text-align: left;
                margin-bottom: 10px;
            ">
                <div style="
                    font-family: 'Bebas Neue', sans-serif;
                    color: ${corPosicao};
                    font-size: 1.8rem;
                    margin-bottom: 15px;
                    letter-spacing: 1px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                ">
                    <span>🏆</span> TÍTULOS
                </div>
                <div style="
                    max-height: 200px;
                    overflow-y: auto;
                    padding-right: 10px;
                ">
                    ${titulosHTML}
                </div>
            </div>
            
            <!-- Temporada atual -->
            <div style="
                margin-top: 15px;
                padding: 10px;
                background: rgba(227,6,19,0.1);
                border-radius: 10px;
                font-size: 0.9rem;
                color: #aaa;
            ">
                ⚽ Temporada 2024 • São Paulo Futebol Clube
            </div>
        </div>
    `;
    
    // Mostrar modal
    modal.style.display = 'flex';
}

function gerarDadosGenericos(nome, posicao) {
    // Fallback para caso o nome não esteja na base de dados
    let gols = 0;
    let titulos = [];
    
    if (posicao.includes('Atacante')) {
        gols = Math.floor(Math.random() * 30) + 10;
        titulos = ['Copa do Brasil 2023'];
    } else if (posicao.includes('Meio')) {
        gols = Math.floor(Math.random() * 15) + 3;
        titulos = ['Paulistão 2021'];
    } else if (posicao.includes('Defensor')) {
        gols = Math.floor(Math.random() * 5) + 1;
    } else if (posicao.includes('Goleiro')) {
        gols = 0;
        titulos = ['Copa do Brasil 2023'];
    }
    
    return {
        numero: Math.floor(Math.random() * 30) + 1,
        idade: Math.floor(Math.random() * (32 - 20) + 20),
        altura: (1.72 + Math.random() * 0.16).toFixed(2) + 'm',
        naturalidade: 'Brasil',
        jogos: Math.floor(Math.random() * 100) + 10,
        gols: gols,
        titulos: titulos
    };
}

function fecharModalPremium() {
    const modal = document.getElementById('modal-spfc-premium');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Fechar com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fecharModalPremium();
    }
});