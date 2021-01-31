import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[app-BetterhighlightDirective]'
})
export class BetterhighlightDirectiveDirective implements OnInit{

  constructor(private elRef:ElementRef, private render: Renderer2) { }

  ngOnInit(){
    this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
  //advantage of renederer is better when using services and service workers easy to instantiate. we can use hostlistener and render inside it .
  // or we can use hostlistener and hostbinding  alone to get same results as this can be binded to any property.
  @HostBinding('style.backgroundColor') backgroundcolor : string ='transparent';

  @HostListener('mouseenter') mouseover(eventdate: Event)
  {
    //this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundcolor='pink';
  }

  @HostListener('mouseleave') mouseleave(eventdate: Event)
  {
    //this.render.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundcolor= 'transparent';
  }



}
