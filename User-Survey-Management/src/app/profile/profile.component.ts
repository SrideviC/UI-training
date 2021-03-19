import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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

