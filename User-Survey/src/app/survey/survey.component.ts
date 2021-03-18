import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { Survey1 } from '../survey1'

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

 
  survey1: Survey1 = new Survey1("","","","","",0,0);
  message:any;
  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
  }

  public doSurvey(){
    let resp = this.service.doUserSurvey(this.survey1);
    resp.subscribe((data)=>this.message=data);
  }
}


