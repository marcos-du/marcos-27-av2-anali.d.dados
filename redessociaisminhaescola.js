console.log('https://script.googleusercontent.com/macros/echo?user_content_key=rSe23zaQC7gOvWgFJbdtPaqh7ewsO5hQmusYOeqdorTRN8C25vVV3BicsPo6HS3jnJY9NNhy_pNZj6prQdxDH3305Mro8vNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1nSncGQajx_ryfhECjZEnPvESZ9fvnAeFWqfIvIacdoRZcVMZ-nDSydw9_0gseo2TN3y60rOTtwDBCYnKQf6yIqgf8yOzNfccjP633C9VnHmUmPZvRBJY9z9Jw9Md8uu&lib=MCARBaBtNBMHKiEwMeRap3j6V_G7SlGWF');
{

}
async function redesSociaisFavoritasMinhaEscola() {
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=rSe23zaQC7gOvWgFJbdtPaqh7ewsO5hQmusYOeqdorTRN8C25vVV3BicsPo6HS3jnJY9NNhy_pNZj6prQdxDH3305Mro8vNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1nSncGQajx_ryfhECjZEnPvESZ9fvnAeFWqfIvIacdoRZcVMZ-nDSydw9_0gseo2TN3y60rOTtwDBCYnKQf6yIqgf8yOzNfccjP633C9VnHmUmPZvRBJY9z9Jw9Md8uu&lib=MCARBaBtNBMHKiEwMeRap3j6V_G7SlGWF'
    const res = await fetch(url) 
    const dados = await res.json()

    console.log(dados)
}

redesSociaisFavoritasMinhaEscola()
console.table(dados)
['Instagram', 'TikTok', 'Twitter/X', 'YouTube', 'Instagram', 'YouTube', 'Snapchat', 'Instagram', 'Facebook', 'Instagram']
const contagemRedesSociais = redesSociais.reduce((acc, redesSociais) => {
    acc[redesSociais] = (acc[redesSociais] || 0) + 1
    return acc
}, {})
const data = [
    {
      values: valores,
      labels: redes,
      type: 'pie',
      textinfo: 'label+percent'
    }
  ]
  
  const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    height: 700,
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
  
  criarGrafico(data, layout)
  import { criarGrafico, getCSS } form "./common.js"

  const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    height: 700,
    title: {
        text: 'Redes sociais que as pessoas da minha escola mais gostam',
//código omitido
// código omitido

criarGrafico(data, layout)
incluirTexto(`Como no mundo, a amostra de pessoas entrevistadas por mim, demonstra um apreço pelo <span>Instagram</span> em relação a outras redes`)
}

redesSociaisFavoritasMinhaEscola()
// código omitido

async function redesSociaisFavoritasMinhaEscola() {
    const dadosLocais = localStorage.getItem('respostaRedesSociais')
    if (dadosLocais) {
        const dadosLocais = JSON.parse(dadosLocais)
        processarDados(dadosLocais)
        } else {
        const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=reS23zaQC7gOwWgFJbdtPaqh7ewsO5hQmusYOeqdorTRN8C25vVV3BicsPoS6HS3jnJY9NNhhy_pNZj6prQdxDH3305Mro8vNm5_BxDLH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPvESZ9fvnAeFwqfIviacdoRZcVMZ-nDSydw9_0gseo2TN3y60rOttwDBCyYnKQf6yIqqf8yOzNfccjP633C9VnHmUmPZvRBJY9z9JW9Md8uu6&lib=MCARABtBNBMHKiEwMeRap3j6V_G7SlGWF'
        const res = await fetch(url)
        const dados = await res.json()
        localStorage.setItem('respostaRedesSociais', JSON.stringify(dados))
        processarDados(dadosLocais)
}

// código omitido
// código omitido

localStorage.setItem('respostaRedesSociais', JSON.stringify(dados))
processarDados(dadosLocais)
}
}

function processarDados(dados) {
const redesSociais = dados.slice(1).map…

// código omitido
const dadosLocaisString = localStorage.getItem('respostaRedesSociais')
if (dadosLocaisString) {
    const dadosLocais = JSON.parse(dadosLocaisString)
    processarDados(dadosLocais)
    }