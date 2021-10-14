export class Punto{

        private x: number;
        private y: number;

                constructor(x:number,y:number){

                        this.x = x;
                        this.y = y;
                }


        //Metodos

        getX():number
        {
                return this.x
        }
        getY():number
        {
               return this.y
        }
        setX(nuevoX: number)
        {
                this.x = nuevoX
        }
        setY(nuevoY: number)
        {
                this.x = nuevoY
        }

        toString()
        {       let array = [this.x,this.y]
                console.log("(" + array.join() + ")")
        }
        distanciaAlOrigen():number
        {
                return Math.sqrt((this.getX() * this.getX()) + (this.getY() * this.getY()))
        }
        calcularDistancia(a:Punto):number
        {
                return Math.sqrt((Math.pow((this.getX() - a.getX()),2)) + (Math.pow((this.getY() - a.getY()),2)))
        }
        calcularCuadrante():number
        {
                //tomo cuadrante ++ como 1, el -+ como 2, el -- como 3 y el +- como 4
                if ((this.getX() == 0)||(this.getY() == 0)){

                        return 0
                }
                else if ((this.getX() > 0)&&(this.getY() >0))
                {
                        return 1
                }
                else if ((this.getX() < 0)&&(this.getY() >0))
                {
                        return 2
                }
                else if ((this.getX() < 0)&&(this.getY() <0))
                {
                        return 3
                }
                else if ((this.getX() > 0)&&(this.getY() <0))
                {
                        return 4
                }
        }
        // calcularMasCercano(puntos:Punto[])
        // {       let array :number[] =[]
        //         for(let i=0; i<puntos.length; i++){

        //                 array.push(this.calcularDistancia(puntos[i]))
        //         }
        //         let min = array[0]
        //         for(let i=0; i<array.length; i++){
        //                 if(array[i] < min){
        //                         min = array[i]
        //                 }
        //         }
        //         for(let i=0; i<puntos.length; i++){
        //                 if(this.calcularDistancia(puntos[i]) == min)

        //                 return puntos[i]
        //         }
        // }
        calcularMasCercano(puntos:Punto[])
        {       let array :number[] =[]
                for(let i=0; i<puntos.length; i++){

                        array.push(this.calcularDistancia(puntos[i]))
                let min = array[0]
                        if(array[i] < min){
                                min = array[i]
                        }
                        if(this.calcularDistancia(puntos[i]) == min)

                        return puntos[i]
                }
        }
}



