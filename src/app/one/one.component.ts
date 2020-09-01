import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetapiService } from '../getapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  Fetchdata:any;
  uid:any;
  sdata: boolean = true;

  @Output() public childEvent = new EventEmitter();

  constructor(private service: GetapiService, private router: Router) { }
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getApiData().subscribe(res=>{
      //console.log("Test", res);
      this.Fetchdata = res;
    });
  }

  getUserId(id){
    this.service.getUserId(id).subscribe(res=>{
      //Using through service
      //this.router.navigate(['/two']);
      
      //Using @Input and @Output
      this.uid = res;
      this.childEvent.emit(this.uid);
      this.sdata = false;
    });
  }

}
