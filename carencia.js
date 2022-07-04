import { Financiamento } from "./financiamento.js";
import {Parcela} from './Parcela.js';

export class FinanciamentoCarencia extends Financiamento {
    #carencia;
    #taxaJuros;
    #parcelas = [];
    constructor(valor,entrada,taxaJuros,prazo,carencia){
        super(valor,entrada,taxaJuros,prazo);
        this.#taxaJuros = taxaJuros;
        this.#parcelas = super.getParcelas();
        this.#carencia = carencia;
    }
    calcParcelasMensais () {
        let saldo = this.#parcelas[0].getSaldo();
        // let prazo = this.#prazo - (this.#parcelas.length - 1);
        // let amortizacao = saldo / prazo;
        for (let i=0; i < this.#carencia; i++) {
            const numero = this.#parcelas.length; 
            // const juros = Financiamento.calcJuros(saldo,this.#taxaJuros);
            // const valor = juros + amortizacao;
            saldo += Financiamento.calcJuros(saldo,this.#taxaJuros); 
            // if (saldo < 0) {saldo = 0;}
            this.#parcelas.push(new Parcela(numero,0,0,0,saldo));
        }
        super.calcParcelasMensais();
     }

}
