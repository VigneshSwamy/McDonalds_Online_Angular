import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[app-Dropdown]'
})
export class DropdownDirective {
 
  constructor() { }

  @HostBinding('class.open') isopen = false;

  @HostListener('click') OnToggleOpen(){
    this.isopen=!this.isopen;
  }

}
