import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

type Member = {
  name: string;
};

type Members = Member[];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NgFor, NgIf],
})
export class AppComponent {
  newMemberName = '';
  members: Members = [];
  errorMessage: string = '';
  numberOfTeams: number | '' = '';
  teams: Members[] = [];

  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = 'Name cannot be empty';

      return;
    }

    this.members.push({ name: this.newMemberName});
    this.newMemberName = '';
    this.errorMessage = '';
  }

  getTeamName(index: number): string {
    return `Team ${index + 1}`;
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'invalid number of tems';
      return;
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }

    this.errorMessage = '';
    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (!member) break;

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
        console.log(this.teams);
      }
    }
    this.members = [];
    this.numberOfTeams = '';
  }
}
