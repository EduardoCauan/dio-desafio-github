# FlexBox no CSS

## FLex Container

display:flex, transforma itens em flex itens

display
flex-direction
flex-wrap
flex-flow
justify-content
align-tems
align-content

## Flex Item

São filhos diretos do Flex Container. Também podem se tornar Flex Container

flex-grow
flex-basis
flex-shrink
flex
order
align-self

## Flex Direction

Entender o comportamento padrão de orientação horizontal de um flex container

Flex Direction é a propriedade que estabelece o eixo principal do container

row (padrão): à direção do texto, esquerda para a direita;
row-reverse: sentido oposto;
column: de cima para baixo, coluna única;
column-reverso: sentido oposto

## Flex Wrap

Cuida da quebra de linha, por padrão, eles não quebrem linha.

nowrap - não permite quebra de linha

wrap - permite a quebra de linha assim que um dos flex itens não puder mais ser compactado

wrap=reverse - permite a quebra de linha assim que um dos flex itens não puder mais ser compactado, porem ele será direcionado para cima.

## Flex flow

é um atalho para as propriedades flex-direction e flex-wrap

Porém seu uso não é tão comum, visto que, quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é o nowrap.

## Justify Content

Alinha os itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles

flex-start: inicio

flex-end: final do container

center: ao centro do container

space-between: cria um espaçamento igual entre os elementos

space-around:

## Align items

alinhamentos dos flex itens de acordo com o eixo do container.
O alinhamento é diferente para quando os itens estão em colunas ou linhas.

Permite o alinhamento central no eixo vertical.

### Tipos de Alinhamento

Center:
stretch: padrãom e 
baseline: alinhamento de acordo com a linha base da tipografia dos itens.

## Align-content

A propriedade responsável de quebrar as linhas do container
precisamos que: o container utilize quebra de linhas
a altura do container seja maior que a soma das linhas dos itens

### tipos de Alinhamento

center: alinhamento dos itens ao centro
stretch: é o padrao e os flex itens crescem igualmnente
flex-start
flex-end
space bet

## Flex-grow

Define a proporcionalidade de crescimento dos itens, respeitando o tamanho de seus conteúdos internos.

OBS: não irá funcionar caso tenhamos adicionado o justify-content ao nosso flex-container.

## Flex basis

estabele o tamanho inicial do item antes da distribuição de espaço restante dentro dele, usando como base o conteúdo interno disposto

auto: sera proporcional ao tamanho do item

px, %, em, ...: valores exatos

0(zero): tera relação com a definição do flex-grow

## Flex-shrink

Capacidade de redução ou compressão do tamanho de um item.

## Flex

Atalho para as proprietades: grow, shrink e basis, nessa ordem respectivamente.

## Order

Ordenação dos flex items

## Align-self

Estabelece o alinhamento de itens de modo individual.