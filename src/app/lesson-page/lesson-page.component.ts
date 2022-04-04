import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LessonInfo } from '../lesson-card/lesson-card.component';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrls: ['./lesson-page.component.css']
})
export class LessonPageComponent implements OnInit {

  lessonId:number=0;
  currentLesson: LessonInfo = new LessonInfo();
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.lessonId = Number.parseInt(this.route.snapshot.paramMap.get('id') || "0");
    if(this.lessonId!==0){
      let lessons: LessonInfo[] = JSON.parse(localStorage.getItem('lessons') || "[]");
      if(lessons.length!==0 && lessons.length<=this.lessonId){
        this.currentLesson = lessons[this.lessonId-1];
      }
    }
  }

}
