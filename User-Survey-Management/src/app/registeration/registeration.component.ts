import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../Services/user-registration.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  user: User = new User("","","",0,"");
  message:any;
  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
  }

  public registerDo(){
    let resp = this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
  }
}
