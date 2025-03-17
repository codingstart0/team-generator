import { Component, OnInit, Input, input  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
@Input() team: string[] = [];
@Input() index = 0;
currentDate = new Date();

constructor(){}
  ngOnInit(): void {}
}
