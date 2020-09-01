import { Component, OnInit, Input } from '@angular/core';
import { GetapiService } from '../getapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  tdata:any;
  //@Input() list;
  constructor(private service: GetapiService, private ar: ActivatedRoute) { } 
  ngOnInit(): void {
    //Using through service code here
    //  this.service.sdata.subscribe(res=>{
    //    console.log("two", res);
    //    this.tdata = res;
    //  })

   //Using Query Params code here
    var uid = this.ar.snapshot.params.userId;
    this.service.getUserId(uid).subscribe(res=>{
      this.tdata = res;
    });
  }

}
