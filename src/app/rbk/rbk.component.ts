import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-rbk",
  templateUrl: "./rbk.component.html",
  styleUrls: ["./rbk.component.css"],
})
export class RbkComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  id: any;
  to:any;
  ngOnInit(): void {}
  collectLog(a, b) {
    let obj = { username: a, password: b };
    this.http.post("http://localhost:3000/login", obj).subscribe((data) => {
      console.log(data);
      localStorage.setItem('userId',data[0].id);
      localStorage.setItem('cohort',data[0].cohort);


      this.id = data[0].id;
      this.to= data[0].Role;
      if (data[0].firstTime === true) {
        this.newUser();
      }
    });
  }
  newUser() {
    document.getElementById("id01").style.display = "block";
  }
  setPassword(pass1, pass2) {
    if (pass1 == pass2) {
      let Obj = { password: pass1, id: this.id };
      this.http
        .post("http://localhost:3000/updatepassword", Obj)
        .subscribe((data) => {
          console.log(data);
          alert("successfully updated");
          this.router.navigateByUrl("/"+this.to);
        });
    } else {
      alert("password not matching");
    }
  }
}
