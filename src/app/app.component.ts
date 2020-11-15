import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = "app";
  nbpart: number = 0;
  firstSession = {
    id: 1,
    name: 'Formation Web',
    track: 'MEAN Stack',
    date: new Date('2018-06-13'),
    duree: 3,
    local: 'Lyon',
    participants: 0
    };
    nbParticipantsChange(event){
      this.nbpart = event.value;
    }
   
}
