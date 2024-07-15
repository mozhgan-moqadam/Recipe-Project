import { Subject } from "rxjs";
import { Ingredient } from "../share/ingredient.model";

export class ShoppingListService{
    ingredientChanged=new Subject <Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 2),
        new Ingredient('Pasta', 3),
        new Ingredient('Mashrom', 12),
        new Ingredient('Salami', 4),
        new Ingredient('Cheese', 1),
      ];

      getIngredients(){
        return this.ingredients.slice();
      }
      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
      }
addIngredients(ingredients:Ingredient[]){
 
  this.ingredients.push(...ingredients);
  this.ingredientChanged.next(this.ingredients.slice());

}
    
}