import { Component, OnInit } from '@angular/core';
import { Home } from '../home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  home: Home = {
    page: 1,
    title: 'Renaissance Girl'
  };
}
