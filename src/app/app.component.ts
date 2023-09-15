import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  todolist=[
    {task:'Gym',completed:false},
    {task:'Breakfast',completed:false,message:'Good Job!'},
    {task:'College',completed:false,message:"Keep up the hard work!"},
    {l1:'Rajama Chawal',l2:'Chicken curry',task:'Lunch',completed:false},
    {venue1:'Marena',venue2:'Sundar Resort',task:'Swimming',completed:false},
  ];
}
