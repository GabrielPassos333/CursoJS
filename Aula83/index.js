class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    //Método de instância
    static trocaPilha(){
        console.log('ok, vou trocar');
    }

    static soma (x, y){
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG'); // quando utilizar NEW o método construtor será chamado
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

ControleRemoto.trocaPilha(); //pode chamar utilizando a classe para chamar
console.log(controle1);

console.log(ControleRemoto.soma(2,4))