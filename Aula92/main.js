class Pessoa{
    cosntructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
}