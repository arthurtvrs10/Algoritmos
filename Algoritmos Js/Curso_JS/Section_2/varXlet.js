// ECMAScript 2015 (ES6) introduziu let e const para declaração de variáveis

var nome = 'Luiz';
var nome = 'Otavio'; // Redeclaração com var é possível
console.log(nome); // Otavio

let nome = 'Luiz';
// let nome = 'Otavio'; // Redeclaração com let gera erro
nome = 'Otavio';
console.log(nome); // Otavio


