import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.css']
})
export class LessonCardComponent implements OnInit {

  @Input() lesson: LessonInfo = new LessonInfo();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLesson(){
    this.router.navigate(['lesson/'+this.lesson.id])
  }

}
export class LessonInfo{
  constructor(
    public name?: string,
    public description?: string,
    public imgUrl?: string,
    public id?:number,
    public detailedDescription?: string,
  ){
    this.name = name ?? "";
    this.description = description ?? "";
    this.imgUrl = imgUrl ?? "";
    this.detailedDescription = detailedDescription ?? "";
  }
}
