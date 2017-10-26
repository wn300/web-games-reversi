import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    setTimeout(function() {
      document.getElementById("execute-advertising").click()
    }, 2000);
  }

  moreInfo(){
    document.getElementById("newReversi").click();
  }

  play(){
    document.getElementById("btn-active-reversi").click();
    document.getElementById("close-modal-advertising").click();
  }

}
