import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from "../../models/card.model";

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
@Input () card: CardModel | undefined

  constructor() { }

  ngOnInit(): void {
    console.log(this.card)
  }

}
