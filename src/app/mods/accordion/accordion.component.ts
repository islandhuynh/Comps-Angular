import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items = [] as any;
  openedItemIndex = -1;

  constructor() { }

  ngOnInit(): void {
  }

  selectTitle(index: number) {
    if (this.openedItemIndex === this.openedItemIndex) {
      this.openedItemIndex = -1; 
    }

    this.openedItemIndex = index;
  }

}
