# APIs
Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.

é possível acessá-las por meio de URLs

## fetch

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

Retorna uma promise e em JSON (Javascript Object Notation)

### Exemplos

fetch('https://endereco-api.com/', {
    method: 'GET'
    cache: 'no-cache'

})
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://endereco-api.com/', {
    method: 'GET'
    cache: 'no-cache'
    body: JSON.stringify(data)

})
    .then(response => response.json())
    .then(json => console.log(json)) 
