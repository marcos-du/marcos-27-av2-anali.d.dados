console.log('deu certo');
{ Instagram: 16.5, WhatsApp: 16.1, Facebook: 12.8, WeChat: 12.8, TikTok: 7.4, _ }
async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]
}

redesFavoritasMundo()
const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text: 'Redes sociais com mais usuários no mundo',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 30
        }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'nome das redes sociais',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    },
    yaxis: {
        tickfont: tickConfig,
        title: {
            text: 'bilhões de usuários ativos',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    }
}
import { getCSS } from "./common.js"

// código omitido
// código omitido

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text: 'Redes sociais que os usuários mais gostam',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 30
        }
    },
    legend: {
        font: {
            color: getCSS('--primary-color'),
            size: 16
        }
    }
}
import { getCSS, criarGrafico } from "./common.js"

// Trecho de código suprimido

criarGrafico(data, layout)
async function redesFavoritasMundo() {
    const layout = {
        legend: {

        }
    }

    criarGrafico(data, layout)

    // incluirText('')
}

redesFavoritasMundo()
import { getCSS, criarGrafico, incluirTexto } from "./common.js"

// código omitido
// código omitido

async function redesFavoritasMundo() {
    const layout = {
        legend: {

        }
    }

    criarGrafico(data, layout)

    incluirTexto(`Embora o <span>Instagram</span> ocupe a quarta posição de redes sociais com mais usuários no mundo, ela é a rede social que as pessoas mais gostam. Seguida de WhatsApp e Facebook. <br> Continuo escrevendo…`)
}

redesFavoritasMundo()