import { Component, ViewChild } from '@angular/core';
import { Chart, registerables  } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    Chart.register(...registerables);
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');


    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Current Value',
              data: [20, 50, 30, 20, 30],
              backgroundColor: "#9145B6",
              borderColor: "#DA3A80",
              fill: true,
          },
          {
            label: 'Invested Amount',
            data: [50, 70, 40, 60, 80],
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            fill: true,
        }],
          labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
      },
  });
  }
}
