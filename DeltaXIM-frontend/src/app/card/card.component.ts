import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  movies:any;
  ngOnInit() {
  }
  constructor(private httpclient:HttpClient){
    this.httpclient.get('http://127.0.0.1:9000/movies')
    .subscribe(
      (data:JSON)=>{
        this.movies = data
        console.log(this.movies)
      }
    )
  }
}
