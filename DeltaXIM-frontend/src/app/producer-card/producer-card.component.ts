import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-producer-card',
  templateUrl: './producer-card.component.html',
  styleUrls: ['./producer-card.component.css']
})
export class ProducerCardComponent implements OnInit {

  producers
  ngOnInit() {
  }
  constructor(private httpclient:HttpClient){
    this.httpclient.get('http://127.0.0.1:9000/producers')
    .subscribe(
      (data:JSON)=>{
        this.producers = data
        console.log(this.producers)
      }
    )
  }
}
