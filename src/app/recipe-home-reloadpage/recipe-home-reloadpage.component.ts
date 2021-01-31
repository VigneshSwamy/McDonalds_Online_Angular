import { Component, OnInit, Input } from '@angular/core';
import { recipeService } from '../recipes/Services/recipe.service';
import { recipeHome } from './recipe-home.model';

@Component({
  selector: 'app-recipe-home-reloadpage',
  templateUrl: './recipe-home-reloadpage.component.html',
  styleUrls: ['./recipe-home-reloadpage.component.css']
})
export class RecipeHomeReloadpageComponent implements OnInit {

  recipehome:recipeHome[];
 

  constructor( private rservice: recipeService) { }

  ngOnInit() {
    this.recipehome =this.rservice.getRecipeHome()
  }
  
}
