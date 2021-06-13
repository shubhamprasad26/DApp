import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/Common/http';
import { Observable } from 'rxjs';
import { Data } from 'Data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';
  User : Data[];

  constructor(private http : HttpClient){  }

  ngOnInit(){ 
    this.getUser();
    
   }

  getUser()  {

    this.http.get<Data[]>('https://datausa.io/api/data?drilldowns=Nation&measures=Population').
      subscribe(response =>{
      this.User = response;}
      ,error=>{
      console.log(error);}
      );

  }


}


