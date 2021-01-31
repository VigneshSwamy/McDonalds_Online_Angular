import { Recipe } from '../recipes.model';
import { EventEmitter, Injectable } from '@angular/core';//removed eventemitter and replaced subjects since it is only cross components
import { ingredientclass } from 'src/app/shared/ingredient.model';
import { shoppingListService } from 'src/app/shopping-list/Services/shopping-list.service';
import { recipeHome } from 'src/app/recipe-home-reloadpage/recipe-home.model';
import { Params } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class recipeService{

  constructor(private slservice:shoppingListService){}

  recipeSelected = new Subject<Recipe>();// or replace eventemittter for subject
  recipeHomeindex = new Subject<recipeHome[]>();

  private recipes: Recipe[] = [ 
        new Recipe('Cheesy Big Fat SandWich',
         'Want More ???', 
         'https://images8.alphacoders.com/871/thumb-1920-871911.jpg',
         [
           new ingredientclass('Sandwich',2),
           new ingredientclass('BunButterJam',5)
         ]
         ),
        new Recipe('A Tasty Yummy Pizza', 
        'Anything Else ?', 
        'https://wallpapersdsc.net/wp-content/uploads/2015/11/Pizza_Wallpaper7.jpg',
        [
          new ingredientclass('Pizza',2),
           new ingredientclass('Pepsi',5)
        ]
        )
      ];

      //this is for page reload welcome screen

      private welcome: recipeHome[] = [ 
        new recipeHome('Ready to Eat Loud !!!! ',
         'Feel the Heaven in this world !!!!!!!!!! ???', 
         'https://thumbs.dreamstime.com/b/welcome-to-our-restaurant-young-smart-male-chef-welcoming-his-guests-31464021.jpg',   
         'https://content3.jdmagicbox.com/comp/delhi/z2/011pxx11.xx11.090918161004.x7z2/catalogue/welcome-restaurant-narela-delhi-home-delivery-restaurants-t7h8e.jpg'      
         )];

      getRecipes()
      {
         return this.recipes.slice();
      }

      
      getSelectedRecipe( Index : number)
      {
         return this.recipes[Index];
      }

      getRecipeHome()
      {
        return this.welcome.slice();
      }

      addingingredienttoshoppingList(ingredient: ingredientclass[])
      {
        this.slservice.onAddIngridents(ingredient);
      }
}
