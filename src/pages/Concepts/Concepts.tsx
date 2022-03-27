export default function Concepts(){
  return (
    <div>
      <h1>Alguns conceitos</h1>
      <p>
        O React sem a utilização destas funções
        sempre irá renderizar ou passará pelo
        estágio de renderização quando algum
        componente mudar seu estado ou alguma
        propriedade (props).
        O React por si só já é muito rápido mas
        dependendo do tamanho da aplicação ou
        projeto, podemos enfrentar alguma perda
        de desempenho por conta desses números
        desnecessários de renderização.
      </p>

      <h1>Quando utilizar?</h1>
      <h3>Memo</h3>
      <ul>
        <li>Componentes Funcionais Puro</li>
        <li>Irá renderizar muitas vezes</li>
        <li>Irá sempre renderizar novamente com as mesmas props</li>
        <li>Para componentes de médio ou grande porte</li>
      </ul>

      <h3>useMemo</h3>
      <ul>
        <li>Evitar que cálculos complexos sejam renderizados novamente</li>
        <li>Resolver problemas de igualdade referencial</li>
      </ul>

      <h3>useCallback</h3>
      <ul>
        <li>Resolver problemas de igualdade referencial</li>
      </ul>

      <h1>Como consigo ver a diferença nestes exemplos</h1>
      <p>
        Para você conseguir ver os exemplos deste projeto em funcionamento
        você terá que baixar uma extensão dos navegadores chamada React
        Developer Tools.
        Assim que instalado, ele irá ficar nas ferramentas do seu navegador,
        selecione a opção Profiler, conforme imagem abaixo.
      </p>
      <img 
        src="assets/imgs/profiler-selection.png"
        alt="Imagem mostra a seleção do Profiler do React Developer Tools"
      />
      <p>
        Assim que selecionar o Profiler, irá aparecer uma tela similar a imagem
        abaixo.
      </p>
      <img 
        src="assets/imgs/profiler.png"
        alt="Imagem mostra o Profiler do React Developer Tools"
      />
      <p>
        Se você for em configurações, na engrenagem embaixo do Profiler, tem uma
        opção que você consegue ver visualmente as renderizações de cada
        componente.
        Para selecionar essa opção, basta marcar a opção da imagem abaixo.
      </p>
      <img 
        src="assets/imgs/profiler-config.png"
        alt="Imagem mostra as configurações do Profiler do React Developer Tools"
      />
      <p>
        Após marcar essa opção, poderá ir nos exemplos e ver os componentes
        renderizando ou não. Os componentes que renderizaram irão ficar marcados
        com uma borda azulada, conforme imagem abaixo.
      </p>
      <img 
        src="assets/imgs/example-without-memo.png"
        alt="Imagem mostra a execução do exemplo sem memo"
      />
    </div>
  )
}