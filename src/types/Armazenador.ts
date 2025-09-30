// servirá apenas para fazer o intermédio para resgatar os valores de localStorage

export class Armazenador {
  private constructor() {
    //
  }

  static setValor(chave: string, valor: any): void {
    localStorage.setItem(chave, JSON.stringify(valor));
  }

  static getValor<TipoEspecifico>(
    chave: string,
    reviver?: (this: any, key: string, value: any) => any
  ): TipoEspecifico | null {
    const valor = localStorage.getItem(chave);

    if (valor === null) {
      return null;
    }
    if (reviver) {
      return JSON.parse(valor, reviver) as TipoEspecifico;
    }

    return JSON.parse(valor) as TipoEspecifico;
  }
}
