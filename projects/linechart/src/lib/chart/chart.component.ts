import { Component, OnInit } from '@angular/core';
import { LinechartService } from '../../public_api';
import { PdfParserLineChart } from '../model/pdf-parser-line-chart';

@Component({
  selector: 'rr-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  
  public pdfParserLineChart: PdfParserLineChart;
  public chartLegend = true;
  public chartType = 'line';

  public chartOptions: any = {
        responsive: true,
        legend: {
            position: 'bottom'
        }
    };

  constructor(private linechartService: LinechartService) { }

  ngOnInit() {
    this.getLineChart();
  }

  getLineChart() {
    this.linechartService.getLineChart()
      .subscribe(res => {
        console.log(res);
        this.pdfParserLineChart = res as PdfParserLineChart;
    }, error => console.error(error));
  }

}
