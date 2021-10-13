import { Punto } from "./Punto";

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

