"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    //Metodos
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setX = function (nuevoX) {
        this.x = nuevoX;
    };
    Punto.prototype.setY = function (nuevoY) {
        this.x = nuevoY;
    };
    Punto.prototype.toString = function () {
        var array = [this.x, this.y];
        console.log("(" + array.join() + ")");
    };
    Punto.prototype.distanciaAlOrigen = function () {
        return Math.sqrt((this.getX() * this.getX()) + (this.getY() * this.getY()));
    };
    Punto.prototype.calcularDistancia = function (a) {
        return Math.sqrt((Math.pow((this.getX() - a.getX()), 2)) + (Math.pow((this.getY() - a.getY()), 2)));
    };
    Punto.prototype.calcularCuadrante = function () {
        //tomo cuadrante ++ como 1, el -+ como 2, el -- como 3 y el +- como 4
        if ((this.getX() == 0) || (this.getY() == 0)) {
            return 0;
        }
        else if ((this.getX() > 0) && (this.getY() > 0)) {
            return 1;
        }
        else if ((this.getX() < 0) && (this.getY() > 0)) {
            return 2;
        }
        else if ((this.getX() < 0) && (this.getY() < 0)) {
            return 3;
        }
        else if ((this.getX() > 0) && (this.getY() < 0)) {
            return 4;
        }
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var array = [];
        for (var i = 0; i < puntos.length; i++) {
            array.push(this.calcularDistancia(puntos[i]));
        }
        var min = array[0];
        for (var i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        for (var i = 0; i < puntos.length; i++) {
            if (this.calcularDistancia(puntos[i]) == min)
                return puntos[i];
        }
    };
    return Punto;
}());
exports.Punto = Punto;
