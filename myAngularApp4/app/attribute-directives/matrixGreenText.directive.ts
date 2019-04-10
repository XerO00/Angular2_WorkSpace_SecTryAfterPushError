import {Directive,ElementRef,Input,Renderer} from '@angular/core';

  @Directive({
 
    selector:'[myMatrixGreenText]',
   
})

export class MatrixGreenText{

  constructor(el:ElementRef, renderer:Renderer){
      renderer.setElementStyle(el.nativeElement, 'color' , 'green');
      renderer.setElementStyle(el.nativeElement, 'background-color' , 'black');
      }
}