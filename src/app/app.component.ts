import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";
import {CardModel} from "./models/card.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public dataService : DataService) { }
  cardData!: Array<CardModel> ;
  ngOnInit(): void {
    this.dataService.getDataJson().subscribe((data: any) => {
      if (data) {
        this.cardData = data
      }
    })
  }
}
