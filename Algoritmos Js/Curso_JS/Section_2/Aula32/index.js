function criaPessoa(nome, idade,sobrenome){ // crie uma função que retorne um objeto
    return{
        nome: nome, // Os dois pontos (:) nesse código servem para separar o nome da propriedade do valor que ela vai receber.
        idade: idade, // Chave : Valor
        sobrenome: sobrenome
    }
}
 
const pessoa1 = criaPessoa('Luiz', 25,'Otávio');
const pessoa2 = criaPessoa('Maria', 30,'Oliveira');
const pessoa3 = criaPessoa('João', 28,'Silva');
const pessoa4 = criaPessoa('Ana', 22,'Souza');

console.log(pessoa1.nome, pessoa1.idade, pessoa1.sobrenome);
console.log(pessoa2.nome, pessoa2.idade, pessoa2.sobrenome);
console.log(pessoa3.nome, pessoa3.idade, pessoa3.sobrenome);
console.log(pessoa4.nome, pessoa4.idade, pessoa4.sobrenome);
