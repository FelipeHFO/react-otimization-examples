# Como aumentar a perfomance do seu projeto?

* No React, desde sua criação, existe um algoritmo chamado de Reconciliation 
(Reconciliação). Este algoritmo é utilizado no último passo de uma renderização.
* Uma renderização é composta por 3 partes, sendos elas: 1ª parte é criar o HTML
do componente, 2ª parte é verificar se há alguma mudança neste HTML, caso ele já
exista e a 3ª parte é o algoritmo de reconciliação, caso exista uma modificação.
* Por padrão, qualquer alteração em um componente, seja um estado ou alguma
mudança no HTML, ele irá renderizar o componente novamente, isso não significa
que ele irá escrever todo o HTML novamente, mas que o algoritmo de reconciliação
irá procurar as mudanças e irá aplicá-las. Dessa forma existe algumas técnicas
para que diminua o tamanho da renderização, por exemplo, caso um estado não
tenha sido alterado, podemos tirar ele do processo de renderização.
* Para que possamos fazer essa técnica, nós usaremos 3 funções chamadas: memo,
useMemo e useCallback.