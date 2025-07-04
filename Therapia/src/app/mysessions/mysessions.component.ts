import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-mysessions',
  templateUrl: './mysessions.component.html',
  styleUrls: ['./mysessions.component.scss'],
  animations: [
    trigger('formSliderAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class MysessionsComponent {}