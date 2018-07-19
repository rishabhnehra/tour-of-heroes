import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.css']
})
export class HeroComponentComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };
  
  constructor() { }

  ngOnInit() {
  }

}
