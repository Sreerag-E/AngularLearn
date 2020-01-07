import { Component, OnChanges } from '@angular/core';

@Component({
    selector : 'app-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.componenet.css']

})

export class starComponent implements OnChanges{
 
    rating :number = 4;
    starwidth : number;

    ngOnChanges() : void {
        this.starwidth = this.rating * 75/5;
    }
}