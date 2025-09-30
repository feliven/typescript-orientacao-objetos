export function ValidaDebito(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (valorDoDebito) {
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
