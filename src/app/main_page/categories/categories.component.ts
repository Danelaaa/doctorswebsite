import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  
  categoriesTitle = [
    {
      id:1,
      title:'ანდროლოგი ',
    },
    {
      id:2,
      title:'ანესთეზიოლოგი  ',
    },
    {
      id:3,
      title:'ანდროლოგი ',
    },
    {
      id:4,
      title:'კარდიოლოგი  ',
    },
    {
      id:5,
      title:'კოსმეტოლოგი  ',
    },
    {
      id:6,
      title:'ლაბორანტი ',
    },
    {
      id:7,
      title:'ოჯახის ექიმი ',
    },
    {
      id:8,
      title:'პედიატრი  ',
    },
    {
      id:9,
      title:'ტოქსიკოლოგი  ',
    },
    {
      id:10,
      title:'ტრანსფუზილოგი  ',
    },
    {
      id:11,
      title:'გინეკოლოგი   ',
    },
    {
      id:12,
      title:'დერმატოლოგი   ',
    },
    {
      id:13,
      title:'ენდოკრინოლოგი   ',
    },
    {
      id:14,
      title:'გასტროენტეროლოგი   ',
    },
    {
      id:15,
      title:'თერაპევტი  ',
    },
    

    
  ]
  constructor(){}
  ngOnInit(): void {

  }
}
