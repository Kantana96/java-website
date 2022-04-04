import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonInfo } from '../lesson-card/lesson-card.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  lesson : LessonInfo = new LessonInfo('Hello world!', 'description','./../assets/images/mountain.jpeg',1);
  allLessons : LessonInfo[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.allLessons = JSON.parse(localStorage.getItem('lessons') || "[]");
    if(this.allLessons.length===0){
      this.allLessons.push(this.lesson);
      localStorage.setItem('lessons',JSON.stringify(this.allLessons));
    }
    this.lesson.detailedDescription = `<h1 style="text-align: center;"><strong>Hello world</strong></h1>
    <p style="text-align: center;"><strong><span class="gamut-yj8jvy-Text e8i0p5k0" aria-hidden="true">Introduction to Java</span></strong></p>
    <div class="spacing-tight__2Gp7GTqG0TykPQ18OnUOVt markdown__1eeYJ4WPKUcvX_LDDGJR12" data-testid="markdown">
    <p class="p__1qg33Igem5pAgn4kPMirjw">Welcome to the world of Java programming!</p>
    <p class="p__1qg33Igem5pAgn4kPMirjw">Programming languages enable humans to write instructions that a computer can perform. With precise instructions, computers coordinate applications and systems that run the modern world.</p>
    <p class="p__1qg33Igem5pAgn4kPMirjw"><a class="e14vpv2g1 gamut-xro1w8-ResetElement-Anchor-AnchorBase e1bhhzie0" href="https://en.wikipedia.org/wiki/Sun_Microsystems" target="_blank" rel="noopener">Sun Microsystems</a>&nbsp;released the Java programming language in 1995. Java is known for being simple, portable, secure, and robust. Though it was released over twenty years ago, Java remains one of the most popular programming languages today.</p>
    <p class="p__1qg33Igem5pAgn4kPMirjw">One reason people love Java is the Java Virtual Machine, which ensures the same Java code can be run on different operating systems and platforms. Sun Microsystems&rsquo; slogan for Java was &ldquo;write once, run everywhere&rdquo;.</p>
    <p class="p__1qg33Igem5pAgn4kPMirjw"><img src="https://content.codecademy.com/courses/learn-java/revised-2019/Java%20Module%201-%20Lesson%201-JVM%20-ART%20408.png" alt="Java Virtual Machine running Java on three different platforms" width="615" height="615" /></p>
    </div>`;
    localStorage.setItem("lessons",JSON.stringify(this.allLessons));
  }

  logOut():void{
    localStorage.removeItem("activeUser");
    this.router.navigate(["login"]);
  }

}
