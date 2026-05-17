/*
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento. Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade categoria como 'cara', caso contrário, a propriedade categoria ficará como 'padrão'. O método de consultar trará apenas o último pagamento.
  
  ex. 
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }
  
  A entregua deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe dentro da pasta test usando Mocha e Node Assert.
*/

import { error } from "node:console";

export default class RealizarEConsultarPagamentos {
    #pagamentos // Propriedade Privada

    constructor() { // Primeiro método a ser executado quando usar a Classe
        this.#pagamentos = [];

    }

    realizarPagamento(codigoBarras, empresa, valorPago) { // Método

        let categoria;

        if(!valorPago){
            throw new Error ('Valor inválido para realizar o pagamento.');
        }
        if(!empresa){
            throw new Error ('Precisa ser preenchido um nome válido para a empresa.');
        }
        if(!codigoBarras){
            throw new Error ('Precisa ser informado um código de barras.');
        }


        if (valorPago > 100) {
            categoria = 'cara';
        } else {
            categoria = 'padrão';
        }

        this.#pagamentos.push({
            codigoDeBarras: codigoBarras,
            nomeEmpresa: empresa,
            valorPago: valorPago,
            categoria: categoria
        })
    }
    
    consultarPagamento() {
        return this.#pagamentos
    }
}

