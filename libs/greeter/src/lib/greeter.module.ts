import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterComponent } from './greeter/greeter.component';
import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  {path:'', component:GreeterComponent}
];
@NgModule({
  imports: [CommonModule],
  declarations: [GreeterComponent],
})
export class GreeterModule {}
