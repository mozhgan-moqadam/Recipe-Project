import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-Project';
  //  selectedSection=true;
   loadedFeature='recipe';
   
  //  onNavigate(feature: string){
  //   this.featureSelected = feature;
  //  }

   onNavigate(feature:string){
    this.loadedFeature=feature
   }
}
