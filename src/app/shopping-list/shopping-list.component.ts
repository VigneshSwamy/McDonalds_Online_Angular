import { Component, OnInit, OnDestroy } from '@angular/core';
import { ingredientclass } from '../shared/ingredient.model';
import { shoppingListService } from './Services/shopping-list.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  ingredients : ingredientclass[];
  private igchangeSub : Subscription;
  
  constructor(private slService: shoppingListService) { }

  ngOnInit() {
    this.ingredients= this.slService.getIngredients();
    this.igchangeSub= this.slService.ingredientsChanged.subscribe(
      (ingred: ingredientclass[]) => {this.ingredients= ingred }
    );
  }
ngOnDestroy(): void {
  this.igchangeSub .unsubscribe();
}

onEditItem(index: number)
  {
    this.slService.startedEditing.next(index);
  }

}
