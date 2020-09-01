import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  data: any;
  sdata:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  fn(e) {
    this.data = e;
    this.sdata = true;
  }
}
