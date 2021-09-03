class FiguraGeometrica{
    constructor(b, h){
        this.base = b;
        this.altura = h;
    }
}

class Triangulo extends FiguraGeometrica{
    calculaArea(){
        return (this.base * this.altura)/2;
    }
}

class Rectangulo extends FiguraGeometrica {
    calculaArea(){
        return this.base * this.altura;
    }
}

class Cuadrado extends FiguraGeometrica {
    calculaArea(){
        return this.base * this.base;
    }
}

var main = function (){
    var figuraGeometrica = new FiguraGeometrica(5,3);
    var triangulo = new Triangulo(6,3);
    var rectangulo = new Rectangulo(6,7);
    var cuadrado = new Cuadrado(3,3);

    console.log(figuraGeometrica);
    console.log(triangulo.calculaArea());
    console.log(rectangulo.calculaArea());
    console.log(cuadrado.calculaArea());
}

main();