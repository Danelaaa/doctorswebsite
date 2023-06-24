import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  implements OnInit{
  cards = [
    {
      view: '129 371',
      profile_img: '../../../assets/Ellipse 5.png',
      name: 'გიორგი ხორავა',
      profession: 'კარდიოლოგი / არითმოლოგი',
      review: 5,
    },
    {
      view: '129 371',
      profile_img: '../../../assets/Ellipse 3.png',
      name: 'ნატალია გოგოხია',
      profession: 'ბავშვთა და მოზრდილთა კარდიოლოგი',
      review: 4,
    },
    {
      view: '129 371',
      profile_img: '../../../assets/Ellipse 3.png',
      name: 'გიორგი ხორავა',
      profession: 'კარდიოლოგი / არითმოლოგი',
      review: 5,
    },
    {
      view: '129 371',
      profile_img: '../../../assets/Ellipse 3.png',
      name: 'გიორგი ხორავა',
      profession: 'კარდიოლოგი / არითმოლოგი',
      review: 5,
    },
    {
      view: '129 371',
      profile_img: '../../../assets/Ellipse 3.png',
      name: 'გიორგი ხორავა',
      profession: 'კარდიოლოგი / არითმოლოგი',
      review: 5,
    },
    
  ]
  constructor(){}
  ngOnInit(): void {

  }
}
