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
Disparo Manual (workflow_dispatch)  - Esse caracteriza o CI de nível 1
      ↓
Disparo agendado → Executa a cada 6 horas (schedule) - Esse caracteriza o CI de nível 2
      ↓
Disparo através do Push na branch main (push event) - Esse caracteriza o CI de nível 3
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

### Detalhamento dos Jobs

#### 🧪 Job: `unit-tests`

**Ambiente:** `ubuntu-latest` (VM Linux com as ferramentas mais recentes)

**Steps Executados:**

| # | Step | Descrição | Ação |
|----|------|-----------|------|
| 1 | **Checkout** | Clone do repositório | `actions/checkout@v4` |
| 2 | **Verificar máquina** | Exibe informações da máquina que está rodando | `hostname` |
| 3 | **Setup Node.js** | Instala Node.js versão 24.x | `actions/setup-node@v4` |
| 4 | **Instalar dependências** | Instala todas as dependências do projeto | `npm install` |
| 5 | **Executar testes** | Executa os testes com reporter Mochawesome | `npm run test:ci` |
| 6 | **Upload Relatório** | Envia o relatório como artefato | `actions/upload-artifact@v4` |

**Detalhes Técnicos:**

```yaml
unit-tests:
  runs-on: ubuntu-latest          # Executa em máquina Linux
  steps:
    - uses: actions/checkout@v4   # Clona o repositório
    
    - name: Verificar máquina
      run: hostname               # Exibe o hostname da máquina
    
    - uses: actions/setup-node@v4 # Configura Node.js
      with:
        node-version: 24.x        # Versão 24.x do Node.js
    
    - name: Instalar dependências
      run: npm install            # Instala todas as dependências
    
    - name: Executar testes
      run: npm run test:ci         # Executa testes com Mochawesome
    
    - name: Relatório de Testes
      uses: actions/upload-artifact@v4
      if: always()                # Executa sempre, mesmo com falhas
      with:
        name: relatorio-mochawesome
        path: mochawesome-report/ # Pasta com os relatórios
        retention-days: 30        # Mantém o artefato por 30 dias
```

**Características Importantes:**

- ✅ **`if: always()`**: O upload do relatório acontece mesmo que os testes falhem, garantindo rastreabilidade
- ✅ **Artifacts**: Os relatórios ficam disponíveis para download por **30 dias** (`retention-days: 30`)
- ✅ **Node.js 24.x**: Versão LTS com suporte completo a ES6 modules

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
