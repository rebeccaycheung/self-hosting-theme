import { Component, OnInit, Input } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-title',
  templateUrl: './category-title.component.html',
  styleUrls: ['./category-title.component.css']
})
export class CategoryTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() heading: string;

  arrow = faAngleRight;

}
