/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css'],
})
export class GreeterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
