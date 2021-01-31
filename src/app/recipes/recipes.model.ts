import { ingredientclass } from '../shared/ingredient.model';

export class Recipe
{
public name : string;
public description : string;
public imagePath: string;
public ingridents : ingredientclass[];
constructor(name:string, description:string, imagePath:string, ingridentinput: ingredientclass[])
{
    this.name=name;
    this.description=description;
    this.imagePath=imagePath;
    this.ingridents= ingridentinput;
}
}