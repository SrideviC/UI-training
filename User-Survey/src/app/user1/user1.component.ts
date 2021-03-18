import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  data:any;
  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data=JSON.parse(params.data);
    })
  }

}
