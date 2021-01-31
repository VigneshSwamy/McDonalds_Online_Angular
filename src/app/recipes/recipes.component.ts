import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { recipeService } from './Services/recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [recipeService]
})
export class RecipesComponent implements OnInit {
  
  
  selectedrecipe : Recipe;
  constructor( private recipeService : recipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) =>{
        this.selectedrecipe=recipe;
      }
    );
  }

}
