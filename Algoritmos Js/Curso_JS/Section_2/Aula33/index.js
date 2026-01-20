/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados
*/

let nome = 'Luiz';
nome = 'Otávio'; // nome recebeu outro valor
console.log(nome);

/*
Referência (mutável) - array, object, function - Valores passados por referência
*/
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const outraPessoa = pessoa; // outraPessoa está recebendo a referência de pessoa
outraPessoa.nome = 'Maria'; // alterando o valor de nome em outraPessoa

console.log(outraPessoa.nome);