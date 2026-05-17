import RealizarEConsultarPagamentos from '../src/realizarEConsultarPagamento.js';
import assert from 'node:assert';


describe('Classe para realizar e consultar pagamento', ()=>{
    it('Validar que ao pagar R$100.00 exibiu a categoria "padrão" ', ()=>{
        //arrange
        const realizarEConsultarPagamentos = new RealizarEConsultarPagamentos();
        //act
        realizarEConsultarPagamentos.realizarPagamento('12365-48748-548787-48787', 'Testes SA', 100.00, 'padrão');
        const pagamentos = realizarEConsultarPagamentos.consultarPagamento();
        const meuPagamento = pagamentos.at(-1);

        //assert
        assert.equal(meuPagamento.codigoDeBarras, '12365-48748-548787-48787');
        assert.equal(meuPagamento.nomeEmpresa, 'Testes SA');
        assert.equal(meuPagamento.valorPago, 100.00);
        assert.equal(meuPagamento.categoria, 'padrão')
    }),
    it('Validar que ao pagar R$101.00 exibiu a categoria "cara" ', ()=>{
        //arrange
        const realizarEConsultarPagamentos = new RealizarEConsultarPagamentos();
        //act
        realizarEConsultarPagamentos.realizarPagamento('12365-48748-548787-48787', 'Testes SA', 101.00, 'cara');
        const pagamentos = realizarEConsultarPagamentos.consultarPagamento();
        const meuPagamento = pagamentos.at(-1);

        //assert
        assert.equal(meuPagamento.codigoDeBarras, '12365-48748-548787-48787');
        assert.equal(meuPagamento.nomeEmpresa, 'Testes SA');
        assert.equal(meuPagamento.valorPago, 101.00);
        assert.equal(meuPagamento.categoria, 'cara')
    })
    it('Deve lançar erro ao não informar um valor de pagamento ', ()=>{
        //arrange
        const realizarEConsultarPagamentos = new RealizarEConsultarPagamentos();
        //assert
        assert.throws(() => {
            realizarEConsultarPagamentos.realizarPagamento('12365-48748-548787-48787', 'Testes SA',0);
        }, {message:"Valor inválido para realizar o pagamento."} 
        );
    })
    it('Deve lançar erro ao não informar uma empresa', ()=>{
        //arrange
        const realizarEConsultarPagamentos = new RealizarEConsultarPagamentos();
        //assert
        assert.throws(() => {
            realizarEConsultarPagamentos.realizarPagamento('12365-48748-548787-48787', '', 54);
        }, {message:"Precisa ser preenchido um nome válido para a empresa."} 
        );
    })
    it('Deve lançar erro ao não informar o código de barras', ()=>{
        //arrange
        const realizarEConsultarPagamentos = new RealizarEConsultarPagamentos();
        //assert
        assert.throws(() => {
            realizarEConsultarPagamentos.realizarPagamento(null,'Testes Sa', 54);
        }, {message:"Precisa ser informado um código de barras."} 
        );
    })
    

 
})