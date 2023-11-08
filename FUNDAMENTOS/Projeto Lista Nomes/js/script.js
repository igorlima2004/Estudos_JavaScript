let nomes = [
    "igor",
    "josé",
    "letícia",
    "maria",
    "kauanny",
    "carlos",
    "pedro",
    "carlos",
    "marcela",
]

function pesquisarNome(){
    let nomePesquisa = document.getElementById('campoNome').value
    let intensLista = ''
    for(indice in nomes){
        if( nomePesquisa == nome){
            intensLista += `
            <li class="list-group-item">
             ${nome}
            </li>`
        }

    }
}

function carregarNomes(){
    
    let intensLista = ''
    for(indice in nomes){

        let nome = nomes[indice]
        intensLista += `
        <li class="list-group-item">
         ${nome}
        </li>`
    }


}

document.getElementById('lista').innerHTML = intensLista