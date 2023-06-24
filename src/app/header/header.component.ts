import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  headerTitle = [
    {
      title:'ექიმები',
    },
    {
      title:'კლინიკები',
    },
    {
      title:'ანოტაციები',
    },
    {
      title:'აქციები',
    },
    {
      title:'სერვისები',
    },
    {
      title:'მედიკამენტები',
    },
    {
      title:'კონტაქტი',
    },
  ];
  languages = [
    {
      title:'ENG',
    },
    {
      title:'GEO',
    },
    {
      title:'RUS',
    },
    
  ]
  onClick(event: Event){
    event.preventDefault();
  }

  isChecked = false;
  auth(){
    this.isChecked = !this.isChecked;
  }

  


  constructor(){}
  ngOnInit(): void {
    
  }
}

