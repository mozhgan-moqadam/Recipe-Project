import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: '\header.component.html',
})
export class headerComponent {
    @Output() featureSelected = new EventEmitter<string>();

    // onSelect(section: boolean) {
    //     this.featureSelected.emit(section);
    // }

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}