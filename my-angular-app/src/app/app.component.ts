import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/Common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';
  User : Object;

  constructor(private http : HttpClient){  }

  ngOnInit(){ 
    this.getUser();
   }

  getUser() : void{

    this.http.get<Observable<Object>>('https://datausa.io/api/data?drilldowns=Nation&measures=Population').subscribe(response =>{
      this.User = response;}
      ,error=>{
      console.log(error);
    })
  }



}


