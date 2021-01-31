import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipes.model';
import { recipeService } from '../Services/recipe.service';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe: Recipe;
  id:number;
  constructor(private rservice:recipeService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (parmas :Params) => { 
        this.id = parmas['id']; 
        this.recipe = this.rservice.getSelectedRecipe(this.id);
    }
       );
  }
  
  onAddtoShoppingList()
  {
    this.rservice.addingingredienttoshoppingList(this.recipe.ingridents);
  }

  onEditRecipe(){
     this.router.navigate(['edit'], {relativeTo: this.route});
     //this.router.navigate(['../',this.id, 'edit'], {relativeTo: this.route});
  }

}
