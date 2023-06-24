import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent {
  categories = [
    { name: "გიორგი ხორავა", category: "ანდროლოგი", picture: "../../assets/Ellipse 23.png"},
    { name: "ნატალია გოგოხია", category: "ანესთეზიოლოგი", picture: "../../assets/Ellipse 23.png"},
    { name: "ანა დვალი", category: "კარდიოლოგი", picture: "../../assets/Ellipse 23.png"},
    { name: "გიორგი გაბიტაშვილი", category: "კოსმეტოლოგი", picture: "../../assets/Ellipse 23.png"},
    { name: "ბარბარე ქორთუა", category: "ლაბორანტი", picture: "../../assets/Ellipse 23.png"},
    { name: "სოფია გოგიაშვილი", category: "ოჯახის ექიმი", picture: "../../assets/Ellipse 23.png"},
    { name: "გიორგი ხორავა", category: "პედიატრი", picture: "../../assets/Ellipse 23.png"},
    { name: "ნატალია გოგოხიძე", category: "ტოქსიკოლოგი", picture: "../../assets/Ellipse 23.png"},
    { name: "ანა დვალიძე", category: "ტრანსფუზილოგი", picture: "../../assets/Ellipse 23.png"}
  ]
}
