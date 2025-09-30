// servirá apenas para fazer o intermédio para resgatar os valores de localStorage
export class Armazenador {
    constructor() {
        //
    }
    static setValor(chave, valor) {
        localStorage.setItem(chave, JSON.stringify(valor));
    }
    static getValor(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
}
