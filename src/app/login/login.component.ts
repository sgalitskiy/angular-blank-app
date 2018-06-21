import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  types = ['show', 'success', 'error', 'info', 'warning'];
  index = 0;

  constructor(private toastr:ToastrService) {}


  ngOnInit() {

  }

  show() {
    let type = this.types[(this.index % 5)];

    this.toastr[type]('Some message', type);

    this.index++;
  }


}
