export function ValidaDebito(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (valorDoDebito: number) {
    if (valorDoDebito <= 0) {
      throw new Error("O valor a ser debitado precisa ser maior que zero.");
    }

    if (valorDoDebito > this.saldo) {
      throw new Error("Seu saldo é insuficiente.");
    }

    return metodoOriginal.apply(this, [valorDoDebito]);
  };

  return descriptor;
}

export function ValidaDeposito(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (valorDoDeposito: number) {
    if (valorDoDeposito <= 0) {
      throw new Error("O valor a ser depositado deve ser maior que zero!");
    }

    return metodoOriginal.apply(this, [valorDoDeposito]);
  };

  return descriptor;
}
