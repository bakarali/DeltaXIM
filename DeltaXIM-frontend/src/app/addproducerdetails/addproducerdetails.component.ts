import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-addproducerdetails',
  templateUrl: './addproducerdetails.component.html',
  styleUrls: ['./addproducerdetails.component.css']
})
export class AddproducerdetailsComponent implements OnInit {

  fileToUpload
  filename
  conv_file
  constructor(private httpclient:HttpClient) {
    this.conv_file = "bakar";
  }

  ngOnInit() {
  }
  handleFileInput(files: FileList) {
    var element = <HTMLInputElement> document.getElementById("button");
    element.disabled = true;
    element.style.opacity = "0.5";
    element.value ="Loading..."
    var self = this;

    this.fileToUpload = files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    var conv_file
    reader.onload = function () {
      conv_file = reader.result.split(",/")[1];
    };
    setTimeout(() => {
       this.filename = files[0].name
       this.conv_file = conv_file
       console.log({"filename":this.filename,"file":this.conv_file})
       element.disabled = false;
       element.style.opacity = "1";
       element.value ="Add Actor"

      }, 3000);  
  }
  addproducers(regForm:NgForm){
    regForm.value['file'] = {"filename":this.filename,"file":this.conv_file}
    console.log(regForm.value)
    this.httpclient.post('http://0.0.0.0:9000/producers',regForm.value).subscribe(res => {
     console.log(res);
   },err => {
     console.log(err);
   });  
} 
}
export class NgbdCollapseBasic {
  public isCollapsed = false;
}