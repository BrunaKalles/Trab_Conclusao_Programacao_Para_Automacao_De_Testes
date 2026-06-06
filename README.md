# 📋 Trabalho de Conclusão - Programação para Automação de Testes

## 📖 Descrição do Projeto

Este projeto implementa uma solução para **realizar e consultar pagamentos** utilizando uma classe JavaScript com testes automatizados. É um trabalho de conclusão de disciplina que demonstra boas práticas em automação de testes com **CI/CD integrada ao GitHub Actions**.


## 🏗️ Estrutura do Projeto

```
.
├── .github/
│   └── workflows/
│       └── manual-agendado-push-exec.yaml  # Pipeline CI/CD
├── src/
│   └── realizarEConsultarPagamento.js      # Classe principal
├── test/
│   └── realizarEConsultarPagamento.test.js # Testes automatizados
├── package.json                             # Dependências do projeto
└── README.md                                # Este arquivo
```

---

## 🚀 Pipeline CI/CD

### Visão Geral da Pipeline

A pipeline foi configurada no GitHub Actions para executar testes automaticamente através de três gatilhos:

```yaml
Disparo Manual (workflow_dispatch) 
      ↓
Pipeline CI/CD → Executa a cada 6 horas (schedule)
      ↓
Push na branch main (push event)
```

### Fluxo de Execução

```
1️⃣ Checkout do Código
   └─ Clona o repositório (actions/checkout@v4)

2️⃣ Setup do Ambiente
   └─ Configura Node.js 24.x (actions/setup-node@v4)

3️⃣ Instalação de Dependências
   └─ npm install

4️⃣ Execução dos Testes
   └─ npm run test:ci (com reporter Mochawesome)

5️⃣ Upload do Relatório
   └─ Artefato: mochawesome-report/ (actions/upload-artifact@v4)
```

### Gatilhos da Pipeline

| Gatilho | Frequência | Descrição |
|---------|-----------|-----------|
| **Disparo Manual** | Sob demanda | Clique em "Run workflow" no GitHub Actions |
| **Agendado** | A cada 6 horas | `0 */6 * * *` (4 vezes por dia) |
| **Push** | Em cada commit | Na branch `main` |

---

## 🧪 Testes Automatizados

### Framework de Testes

- **Mocha**: Framework de testes JavaScript
- **Node Assert**: Biblioteca nativa de asserções
- **Mochawesome**: Reporter visual para relatórios de teste

### Estrutura de Testes (Padrão AAA)

Os testes seguem o padrão **Arrange, Act, Assert**:

---

## 💻 Conceitos Aplicados

### 1. **CI/CD (Continuous Integration/Continuous Deployment)**
- Automação de execução de testes em cada alteração
- Garantia de qualidade antes de merges
- Documentação automática com relatórios

### 2. **Programação Orientada a Objetos (POO)**
- **Classe**: `RealizarEConsultarPagamentos`
- **Encapsulamento**: Propriedades privadas com `#pagamentos`
- **Métodos**: `realizarPagamento()`, `consultarPagamento()`


### 3. **Validações e Tratamento de Erros**
- Validação de parâmetros obrigatórios
- Lançamento de exceções com mensagens significativas
- Garantia de integridade dos dados


### 4. **Lógica de Negócio**
- Categorização dinâmica baseada em regra: `valor > 100 ? "cara" : "padrão"`
- Armazenamento de histórico de pagamentos
- Acesso ao último pagamento registrado

### 5. **Testes Automatizados**
- Cobertura de casos positivos e negativos
- Validação de regras de negócio
- Verificação de tratamento de exceções

---

## 📦 Dependências

### DevDependencies

```json
{
  "mocha": "^11.7.6",              // Framework de testes
  "mocha-junit-reporter": "^2.2.1", // Reporter JUnit
  "mochawesome": "^7.1.4"           // Reporter visual
}
```

---

## 🔧 Como Executar

### Instalação

```bash
npm install
```

### Executar Testes Localmente

```bash
# Teste padrão (saída no console)
npm run test

# Teste com relatório Mochawesome
npm run test:ci
```

### Visualizar Relatório

Após executar `npm run test:ci`, abra o arquivo:
```
mochawesome-report/index.html
```

---

## 🎯 Objetivos Pedagógicos

Este projeto demonstra:

- ✅ Compreensão de **CI/CD com GitHub Actions**
- ✅ Prática em **testes automatizados com Mocha**
- ✅ Implementação de **validações e tratamento de erros**
- ✅ Uso de **POO em JavaScript**
- ✅ Organização de **código modular**
- ✅ Geração de **relatórios de teste**
- ✅ Versionamento com **Git e GitHub**

---

## 📚 Recursos Utilizados

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Mocha Testing Framework](https://mochajs.org/)
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)
- [Node.js Assert Module](https://nodejs.org/api/assert.html)
- [JavaScript ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)


---

**Autor**: Bruna Kalles  
**Repositório**: [GitHub](https://github.com/BrunaKalles/Trab_Conclusao_Programacao_Para_Automacao_De_Testes)  
**Data**: Junho 2026
