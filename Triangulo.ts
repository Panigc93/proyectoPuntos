import { Punto } from './Punto';

export class Triangulo{

        private v1: Punto;
        private v2: Punto;
        private v3: Punto;

                constructor(v1:Punto,v2:Punto,v3:Punto){
                        this.v1 = v1
                        this.v2 = v2
                        this.v3 = v3
                }

        //Metodos

        calcularLongitudLados() : number[]
        {
                let arrayLados = [(this.v1.calcularDistancia(this.v2)),(this.v2.calcularDistancia(this.v3)),(this.v3.calcularDistancia(this.v1))]
                return arrayLados
        }

}

