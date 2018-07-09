import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  actors:any
  ngOnInit() {
  }
  constructor(private httpclient:HttpClient){
    this.httpclient.get('http://127.0.0.1:9000/actors')
    .subscribe(
      (data:JSON)=>{
        this.actors = data
        console.log(this.actors)
      }
    )
  }
}
