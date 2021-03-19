import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../Services/user-registration.service';
import { Survey } from '../survey'

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

 
  survey: Survey = new Survey("","","","","",0,0);
  message:any;
  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
  }

  public doSurvey(){
    let resp = this.service.doUserSurvey(this.survey);
    resp.subscribe((data)=>this.message=data);
  }
}


