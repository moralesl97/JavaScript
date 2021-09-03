//OOP OBJECT ORIENTED PROGRAMMING

class Animal {
    constructor(categoria){
        this.categoria = categoria;
    }
}

class CuentaBancaria {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(cantidad){
        this.saldo += cantidad;
    }

    retiro(cantidad){
        this.saldo -= cantidad;
    }
}

class TarjetaDeCredito extends CuentaBancaria {
constructor(fc, pm){
    this.fechaDeCorte = fc;
    this.pagoMinimo = pm;
}

    imprimeFechaDeCorte(){
        console.log(`Fecha de corte es: ${this.fechaDeCorte}`);
    }
    
    imprimePagoMinimo(){
        console.log(`El pago minimo es: ${this.pagoMinimo}`);
    }
}

var main = function(){
    let perro = new Animal('perro');
    let gato = new Animal('gato');

    console.log(perro.categoria);
    console.log(gato.categoria);

    let cuenta1 = new CuentaBancaria(5000);
    cuenta1.deposito(2000);
    cuenta1.deposito(4000);
    console.log(cuenta1.saldo);
}

main();