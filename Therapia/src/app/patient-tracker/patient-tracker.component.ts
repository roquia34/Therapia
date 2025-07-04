import { Component , AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-patient-tracker',
  templateUrl: './patient-tracker.component.html',
  styleUrl: './patient-tracker.component.scss'
})
export class PatientTrackerComponent implements AfterViewInit {
  chart: any;

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    const ctx = document.getElementById('activityChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Heart Rate', 'Steps', 'Calories Burned', 'Protein', 'Water'],
        datasets: [{
          label: 'Health Metrics',
          data: [72, 10432, 550, 75, 2.5],
          backgroundColor: ['#0293a3', '#035d6f', '#74c7d3', '#a6d8e7', '#5ba4b3']
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}