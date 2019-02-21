import { NgModule } from '@angular/core';
import { LinechartComponent } from './linechart.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ChartsModule
  ],
  declarations: [LinechartComponent, ChartComponent],
  exports: [
    ChartComponent
  ]
})
export class LinechartModule { }
