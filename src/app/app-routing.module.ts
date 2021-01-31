import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeHomeReloadpageComponent } from './recipe-home-reloadpage/recipe-home-reloadpage.component';
import { SelectarecipeComponent } from './recipes/selectarecipe/selectarecipe.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes:Routes =[
    { path:'', redirectTo:'/recipes',pathMatch:'full'},
    { path:'recipeshome',component: RecipeHomeReloadpageComponent},
    { path:'recipes', component: RecipesComponent, children: [
        {path:'', component:SelectarecipeComponent},
        { path:'new', component: RecipeEditComponent},
        {path:':id',component:RecipesDetailComponent},
        { path:':id/edit', component: RecipeEditComponent}           
       
    ]},
    { path:'shopping-list', component: ShoppingListComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class ApproutingModule {

}