const pessoa1 = { // objeto
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 25,

    fala() { // método
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incremetnadoIdade() {
        this.idade++;
    }


};

pessoa1.fala();
pessoa1.incremetnadoIdade();
pessoa1.fala();