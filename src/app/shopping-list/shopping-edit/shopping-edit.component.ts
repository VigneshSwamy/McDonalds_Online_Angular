import { Component, OnInit, OnDestroy, ViewChild,  } from '@angular/core';
import { ingredientclass } from 'src/app/shared/ingredient.model';
import { shoppingListService } from '../Services/shopping-list.service';
import {FormsModule, NgForm} from '@angular/forms'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{

  // not needed as we can get the value from UI to code by ngModel from forms
  // @ViewChild('inputName',{static:false}) nameinputref: ElementRef;
  // @ViewChild('inpuAmount',{static:false}) Amountinputref: ElementRef;
  

  //amountinputref:ElementRef;
  subscription: Subscription;
  editMode = false;
  editedItemIndex :number;
  editedItem:ingredientclass;
  @ViewChild('f',{static:false}) myForm: NgForm;

  constructor(private slService: shoppingListService) { }

  ngOnInit() {
    this.subscription= this.slService.startedEditing.subscribe(
        (index: number) => {       
        this.editedItemIndex = index;
        this.editMode=true;
        this.editedItem= this.slService.getIngredientforEditing(index);
        this.myForm.setValue(
          {
            name: this.editedItem.name,
            amount : this.editedItem.amount
          }
        );
      }
    );
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  OnAdditem(form : NgForm)
  {
    //not needed as we can get the value from UI to code by ngModel from forms
    // const name = this.nameinputref.nativeElement.value;
    // const amount = this.Amountinputref.nativeElement.value;

    const value = form.value;

    const newingredient = new ingredientclass(value.name,value.amount);

    if(this.editMode)
      this.slService.updateIngrident( this.editedItemIndex, newingredient)
    else
      this.slService.OnAddItem(newingredient);
    this.editMode=false;
    form.reset();

  }

  onClear()
  {
        this.myForm.reset();
        this.editMode=false;
  }

  onDelete()
  {
    this.slService.DeleteSelectedItem(this.editedItemIndex);
    this.onClear();
    
  }

  
}
