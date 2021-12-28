import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myPhoto = "";
  async getMeme() {
    // this.myPhoto = await (await fetch("https://memeapi100.herokuapp.com/")).json();
    let object = await (await fetch("https://memeapi100.herokuapp.com/")).json();
    console.log(object);
    this.myPhoto = object.memeLink
  }
}
