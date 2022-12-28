import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomMinDirective } from '../directives/custom-min.directive';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  
  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid 
            && this.miFormulario?.controls['producto'].touched;
  }

  precioValido(): boolean {

    return this.miFormulario?.controls['precio']?.touched  
            && this.miFormulario?.controls['precio']?.value < 0;
  }

  //guardar( miFormulario: NgForm ) {
  guardar( ) {
    console.log( this.miFormulario );
    
  }

  customDirective() {
    return this.miFormulario?.controls['existencias']?.errors
  }
}
