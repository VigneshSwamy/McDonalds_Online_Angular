import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { basicHighlightDirective } from './Directives/basic-highlight directive/basichighlight-directive';
import { BetterhighlightDirectiveDirective } from './Directives/better-highlight directive/betterhighlight-directive.directive';
import { DropdownDirective } from './Directives/dropdown directive/dropdown.directive';
import { shoppingListService } from './shopping-list/Services/shopping-list.service';
import { ApproutingModule } from './app-routing.module';
import { RecipeHomeReloadpageComponent } from './recipe-home-reloadpage/recipe-home-reloadpage.component';
import { recipeService } from './recipes/Services/recipe.service';
import { SelectarecipeComponent } from './recipes/selectarecipe/selectarecipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesItemComponent,
    basicHighlightDirective,
    BetterhighlightDirectiveDirective,
    DropdownDirective,
    RecipeHomeReloadpageComponent,
    SelectarecipeComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApproutingModule
  ],
  providers: [shoppingListService,recipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
