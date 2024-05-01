class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome + 'já ligado');
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(this.nome + 'já desligado');
            return;
        }
        this.ligado = false;
    }
}

// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// d1.desligar();
// d1.desligar();
// console.log(d1);

class Smartphone extends DispositivoEletronico{ // extender a DISPOSITIVO ELETRONICO
    constructor(nome, cor, modelo){
        super(nome); // para chamar da class anterior, senão não da pra chamar

        this.cor = cor;
        this.modelo = modelo;
    }
    ligar() {
        console.log("Olha, você alterou o método ligar.");
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi
    }
    ligar() {
        console.log("Olha, você alterou o método ligar.");
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('iPad', true);
console.log(t1.ligado);
console.log(t1);