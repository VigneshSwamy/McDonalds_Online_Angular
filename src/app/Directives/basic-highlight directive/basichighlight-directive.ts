import { Directive, OnInit, ElementRef } from '@angular/core';


@Directive({
    selector:'[app-basicHighlightDirective]'
})
export class basicHighlightDirective implements OnInit{
    constructor(private elementref: ElementRef){

    }

    ngOnInit(){
        this.elementref.nativeElement.style.backgroundColor= 'yellow';
    }
    
}