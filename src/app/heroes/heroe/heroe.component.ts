import { Component } from '@angular/core';


@Component({
selector:'app-heroe',
templateUrl: 'heroe.component.html',
})
//componentes
export class HeroeComponent{
nombre: string ='Ironman';
edad: number=45;
//getter 
get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
}
//metodo
obtenerNombre():string{
    return`${this.nombre}-${this.edad}`;
}

cambiarNombre():void{
    this.nombre='Spiderman';
}

cambiarEdad():void{
    this.edad=30;
}
}