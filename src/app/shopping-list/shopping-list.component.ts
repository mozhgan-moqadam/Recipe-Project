import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../share/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ngOnInit(): void { }

  Ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 2),
    new Ingredient('Pasta', 3),
    new Ingredient('Mashrom', 12),
    new Ingredient('Salami', 4),
    new Ingredient('Cheese', 1),
  ];

  // onIngredientAdded(ingredient = Ingredient) {
  //   this.ingredients.push(ingredient);
  // }
  onIngredientAdded(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    this.Ingredients.push(newIngredient);
  }
  
}
