import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model"
import { Ingredient } from "../share/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService {
    recipeSelected = new Subject<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Pasta', 'what we need?', 'https://static.ffx.io/images/$zoom_0.1151%2C$multiply_1.9683%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_62%2Cf_auto/dfc9baa22cdf0e2b419142cc8dd0364f70a2d1b8', [new Ingredient('Pasta + Mashroom', 2)]),
        new Recipe('Hamburger', 'waht we need?', 'https://www.weltderwunder.de/wp-content/uploads/2022/04/1_PM-Besser-als-sein-Ruf_iStock_cookelma_20151221.jpg', [new Ingredient('chesse + pomes + soda', 2)]),
        new Recipe('Pizza', 'what we need? ', 'https://www.italianstylecooking.net/wp-content/uploads/2022/01/Pizza-Salami-1024x683.jpg?ezimgfmt=ngcb1/notWebP', [new Ingredient('Salami pizza', 2)]),
        new Recipe('Falafel', 'what we need?', 'https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-10.jpg', [new Ingredient('Falafel are deep fried balls ', 2)]),
    ]
    constructor(private slServic:ShoppingListService) { };

    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slServic.addIngredients(ingredients);

    }

}   