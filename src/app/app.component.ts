import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";
import {CardModel} from "./models/card.model";

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public dataService: DataService) {
  }

  cardData!: Array<CardModel>;
  price: number = 0;
  wage: number = 0

  ngOnInit(): void {
    this.dataService.getDataJson().subscribe((data: any) => {
      if (data) {
        this.cardData = data
      }
    })
  }

  calcWage() {
    let val = 50000000
    let tempPrice = parseInt(String(this.price));
    let eachVal = 0
    this.wage = 0
    do {
      tempPrice = tempPrice - val;
      eachVal += 1
    } while (0 < tempPrice && tempPrice >= val);
    if (tempPrice > 0) {
      this.wage += this.percentage(tempPrice, 1)
    }
    for (let i = eachVal; eachVal > 0; i--) {

      this.wage += this.percentage(val, 1)
      eachVal--
    }
  }

  percentage(val: number, percent: number) {
    let exactWage = val * percent / 100;
    if (exactWage >= 5000) {
      return 5000
    }
    if (exactWage <= 2000) {
      return 2000
    } else {
      return exactWage
    }
  }
}
