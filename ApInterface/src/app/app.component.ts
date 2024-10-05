import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// interface statData {
//   name: string;
//   value: number;
//   points: number;
//   calc: boolean;
// }

export class AppComponent {
  title = 'ApInterface';

  public baseStats: { name: string, value: number, maxValue: number }[] =
    [
      {
        name: 'Health',
        value: 3,
        maxValue: 5
      },
      {
        name: 'Armor',
        value: 5,
        maxValue: 5
      },
      {
        name: 'Sanity',
        value: 5,
        maxValue: 5
      },

    ]

  public playerStats: { name: string, value: number, points: number, calc: boolean }[] =
    [
      {
        name: 'Strength',
        value: 3,
        points: 0,
        calc: false
      },
      {
        name: 'Speed',
        value: 0,
        points: 0,
        calc: false
      },
      {
        name: 'Agility',
        value: 0,
        points: 0,
        calc: false
      },
      {
        name: 'Resilience',
        value: 0,
        points: 0,
        calc: false
      },
      {
        name: 'Awareness',
        value: 0,
        points: 0,
        calc: false
      },
      {
        name: 'Knowledge',
        value: 0,
        points: 0,
        calc: false
      },
      {
        name: 'Wisdom',
        value: 0,
        points: 0,
        calc: false
      },
      {
        name: 'Presence',
        value: 0,
        points: 0,
        calc: false
      },
      {
        name: 'Articulation',
        value: 0,
        points: 0,
        calc: false
      }
    ];




  statTotal = 3;

  apCurrent = 3;
  apMax = 3;

  statCalc = 0;

  statChanged(event: any, stat: any) {


    console.log(event);
    console.log(stat);

    this.updateTotal();

  }


  updateTotal() {

    this.statTotal = 0;
    for (let i = 0; i < this.playerStats.length; i++) {

      this.statTotal += this.playerStats[i].value;

    }

  }

  useAction(cost: number) {

    if (this.apCurrent - cost >= 0) {
      this.apCurrent -= cost;
    }

  }

  nextTurn() {
    this.apCurrent = this.apMax;
  }


  selectedFile: any;
  jsonObj: any = {} // json object


  uploadFile(event: any) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      //console.log(fileReader.result.toString());
      if (fileReader.result != null) {
        this.jsonObj = (JSON.parse(fileReader.result.toString()));
        console.log(this.jsonObj);
      }
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }
}
