# Anotações HTML 

## Elementos

Nesse curso, utilizarei o VSCode para programar os projetos.

### section

Representa uma seção genérica de conteúdo quando não houver um elemento mais específico para isso.

### header

É o cabeçalho da página ou de uma seção da página e normalmente contém logotipos, menus, campos de busca.

### article

Representa um conteúdo independente e de maior relevância dentro de uma página, como um post de blog, uma notícia em uma barra lateral ou um bloco de comentários. Um article pode conter outros elementos, como header, cabeçalhos, parágrafos e imagens.

### aside

É uma seção que engloba conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do autor e publicidade. Normalmente são representadas como barras laterais.

### footer

Esse elemento representa o rodapé do conteúdo ou de parte dele, pois ele é aceito dentro de vários elementos, como article e section e até do body. Exemplos de conteúdo de um footer são informações de autor e links relacionados.

### p 

Representa um parágrafo, no qual podemos colocar fotos, textos ou vídeos

### a

Representa um hyperlink

#### a href

< a href ="Site">Site</ a>

#### a target

< a target="_blank">Link</ a>

### img

#### src e alt

Scr é obrigatórioe guarda o caminho

Alt melhora a acessibilidade, pois mostra a descrição da foto.

Utilizar o site <a href="tinypng.com">Tinypng</a> para retirar metadados desnecessários e otimizar o documento.

## Listas

### Ul

Representa uma lista em que a ordem não é importante
Item 1
Item 2

### ol

1. Item 1
2. Item 3

### li

item de uma lista


## CSS


### background

background-color ou background, mesma coisa, podemos usar o nome ou o codigo hexadecimal


### Border

Largura: pixels, centímetros, milímetros...
Cor: blue, #0000ff...
Estilo: Sólida, pontilhada, tracejada...

podemois usar:
border-top
border-right
border-bottom
border-left

border-width para largura
border-color para cor
border-style para estio

ou 

border: largura estilo cor

exemplos: border-top-widht; border-top-color

#### Border-radius

Podemos arredondar os cantos.
border-radius: 50px
border-radius: 50% -> transforma a borda em um círculo.

### Estilizando textos

#### Font-family
Altera a fonte do texto, com fontes da web ou instalada na máquina.
font-family: Verdana
font-family: Verdana, Arial; caso a segunda não funciona, ela entra como back-up

#### Font-size


Determina o tamanho da fonte.

#### Font-style

font-style: normal
Itálico, normal.

#### Font-weight
Aumenta o "peso" do texto, 

normal e bold(negrito)

#### text-transform

transforma o texto em uppercase, lowercase ou capitalize(primeiras letras em maiúsculo)

#### text-decoration
Coloca linhas no texto
text-decoration: underline; sublinhado
text-decoration: overline; linha acima do texto
text-decoration: line-through; çinh

#### list-style-type

ul{
    list-style-type: square; cria um simbolo quadrado
}


ol{
    list-style-type: upper-roman; algarismo romano maiusculo
}
ul{
    list-style-type: "\1F44D"; um simbolo, no exemplo, é um joinha.
}

#### list-style-image
ul{
    list-style-image: url("rocket.png"); coloca uma imagem na marcação
}

### Dimensão e alinhamento 

widht largura
height altura

max-width max-height larguras e alturas maximas q as coisas podem ter

margin -> espaçamento entre elementos (tem o valor auto para alinhar automáticamente)

text align: justificado, centralizado

## Flexbox no CSS

Flexbox para a criação de layout responsivos, sem a necessidade de definir valores fixos.