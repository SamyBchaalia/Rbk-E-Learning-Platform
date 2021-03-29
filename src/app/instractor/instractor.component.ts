import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-instractor',
  templateUrl: './instractor.component.html',
  styleUrls: ['./instractor.component.css']
})
export class InstractorComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
 data:any;
 count:any;
 pairs:any;
 
  ngOnInit(): void {
    this.http.get("http://localhost:3000/students").subscribe((data) => {
      console.log(data);
      this.data = data;
      this.data.map((e) => {
        this.count++;
      });
    });
  }
  generateArray()
  {
    var students = []
    this.data.map((e)=>{
      students.push(e.username)
    })
    
      for (var i = students.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = students[i];
        students[i] = students[j];
        students[j] = temp;
    }
      var pairs = "";
      for (var i = 0; i < students.length; i = i + 2) {
        pairs = pairs + " , " + students[i] + " and " + students[i + 1];
      }
var arr=new Array();
      arr=pairs.split(',');
      console.log("array",arr);
      this.pairs=arr;
      this.ngOnInit;
  }

}
