/*
 while(condição){
   Executa enquanto a condição é verdadeira
 }
*/
let postagens = [
    "Hoje passeando pela av paulista",
    "Passeando em Campos do Jordão",
    "Hoje fiz um curso de criação de sites",
    "Na casa da mamãe, aproveitando o dia!",
    "postagem 5"
  ]
  const totalPostagens = postagens.length
  console.log( totalPostagens )
  let numero = 0
  // 0 1 2 3 4
  while( numero < totalPostagens ){
    console.log("IMAGEM " + numero)
    console.log( postagens[numero] )
    console.log("----")
    numero = numero + 1
  }