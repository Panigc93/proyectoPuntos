import { Punto } from "./Punto";
import { Triangulo } from './Triangulo';

let puntito = new Punto(1,2)
let punto2= new Punto (0,1)
let punto3 = new Punto (2,2)
let punto4 = new Punto(3,3)
let punto5= new Punto (4,4)

console.log(puntito)
console.log(puntito.distanciaAlOrigen())
console.log(puntito.calcularDistancia(punto2))
console.log(puntito.calcularCuadrante())

let arrayPuntos = [punto2,punto3,punto4,punto5]

console.log(puntito.calcularMasCercano(arrayPuntos))


let vertice1 = new Punto(5,1)
let vertice2 = new Punto (2,2)
let vertice3 = new Punto (2,1)

let triangulo = new Triangulo(vertice1,vertice2,vertice3)

console.log(triangulo.calcularLongitudLados())

