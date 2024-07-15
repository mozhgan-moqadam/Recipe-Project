import { Ingredient } from "../share/ingredient.model";

export class Recipe{
public name:string;
public description:string;
public imagepath:string;
public ingredients:Ingredient[];

constructor(name:string,desc:string,imagepath:string,ingredients:Ingredient[]){
    this .imagepath=imagepath;
    this.description=desc;
    this .name=name
    this.ingredients=ingredients;
}




}
