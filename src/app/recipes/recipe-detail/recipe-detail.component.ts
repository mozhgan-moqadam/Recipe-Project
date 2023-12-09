import { Component, OnInit ,Input} from '@angular/core';
import { Ingredient } from 'src/app/share/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  ngOnInit(): void {}

 @Input() recipe!:Recipe

 
}
