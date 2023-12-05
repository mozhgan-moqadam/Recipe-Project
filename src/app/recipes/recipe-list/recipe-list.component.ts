import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  ngOnInit(): void { }
  @Output() recipeWasSelected=new EventEmitter <Recipe>();
recipes:Recipe[]=[
  new Recipe('Pasta','Pasta + Mashroom','https://static.ffx.io/images/$zoom_0.1151%2C$multiply_1.9683%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_62%2Cf_auto/dfc9baa22cdf0e2b419142cc8dd0364f70a2d1b8'),
  new Recipe('Hamburger','chesse + pomes + soda','https://www.weltderwunder.de/wp-content/uploads/2022/04/1_PM-Besser-als-sein-Ruf_iStock_cookelma_20151221.jpg'),
  new Recipe('Pizza','Salami pizza + ','https://www.italianstylecooking.net/wp-content/uploads/2022/01/Pizza-Salami-1024x683.jpg?ezimgfmt=ngcb1/notWebP'),
  new Recipe('Falafel','Falafel are deep fried balls .','https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-10.jpg'),
]
onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe);
}
}
