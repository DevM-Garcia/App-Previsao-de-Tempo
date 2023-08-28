

const key = "ad77583178e8289bb2daeec973dc9f32"

function atualizaDadosNaTela(dados) {
    document.querySelector('.city').innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + '°C';
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity + '%';
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    atualizaDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector('#text').value;

    buscarCidade(cidade)
}
