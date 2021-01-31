import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { Recipe } from '../recipes.model';
import { recipeService } from '../Services/recipe.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  
  recipes : Recipe[]; 

  constructor( private recipeService:  recipeService, private route:Router , private activeroute: ActivatedRoute) {   }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

  onAddNewRecipe()
  {
    this.route.navigate(['new'],{relativeTo:this.activeroute});
  }
  


}
