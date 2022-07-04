import {Financiamento} from './financiamento.js';
import {Parcela} from './Parcela.js';
import {FinanciamentoCarencia} from './carencia.js';
//listagem de constantes
const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');
const corpoTabela = document.querySelector('#corpoTabela');
const botaoCalcular = document.querySelector("#botaoCalcular");
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');


function limpaCorpo () {
    while(corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.firstChild);
    }
}

//Manejar botão "Com Carência"
comCarencia.addEventListener('change', function () {
    if(this.checked) {
        listaSuspensa.removeAttribute('hidden');
    } else {
        listaSuspensa.setAttribute('hidden','hidden');
    }
});

//Adiciona funcao ao botao Calcular

botaoCalcular.addEventListener("click",function() {
    limpaCorpo();
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;
    if (comCarencia.checked) {
        const carencia = parseInt(listaSuspensa.value);
        simulacao = new FinanciamentoCarencia(valor,entrada,taxaJuros,prazo,carencia);
    } else {
        simulacao = new Financiamento(valor,entrada,taxaJuros,prazo);
    }

    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
});




