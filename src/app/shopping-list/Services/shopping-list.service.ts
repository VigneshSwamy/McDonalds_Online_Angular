import { ingredientclass } from 'src/app/shared/ingredient.model';
import { EventEmitter } from '@angular/core';// removed for subjects from rxjs
import { Subject } from 'rxjs';//if using subjects instead of eventemitter replace eventemitter for subjects and emit for next keywords.

export class shoppingListService
{
  ingredientsChanged = new Subject<ingredientclass[]>();//replaced subject insted of eventemmitter
  startedEditing = new Subject<number>();

  private ingredientsobj: ingredientclass[] =[
        new ingredientclass('Apple',5),
        new ingredientclass('Banana',10)    
      ];

getIngredients()
{
    return this.ingredientsobj.slice();
}


getIngredientforEditing(index: number)
{
  return this.ingredientsobj[index];
}

OnAddItem( ingredientIncomeing : ingredientclass )
{
  this.ingredientsobj.push(ingredientIncomeing);
  this.ingredientsChanged.next(this.ingredientsobj.slice());
}

onAddIngridents( ingridentinput : ingredientclass[])
{
this.ingredientsobj.push(...ingridentinput);
this.ingredientsChanged.next(this.ingredientsobj.slice());
}

updateIngrident( index :number , newingredient: ingredientclass )
{
 this.ingredientsobj[index] = newingredient;
 this.ingredientsChanged.next(this.ingredientsobj.slice());
}

DeleteSelectedItem(index: number)
{
 this.ingredientsobj.splice(index,1);
 this.ingredientsChanged.next(this.ingredientsobj.slice());

}

}