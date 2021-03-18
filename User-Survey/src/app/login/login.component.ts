import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form:any;

  
constructor(
    private router:Router,
    private route:ActivatedRoute
){
  this.form = new FormGroup(
    {
     emailID:new FormControl("", Validators.required)
    }
  ) 
}


  ngOnInit(): void {
  }

  sendData(){
    let data:any = this.form.value;
    this.router.navigate(['./user1'],{
      queryParams:{data:JSON.stringify(data)}
    })
  }


}

