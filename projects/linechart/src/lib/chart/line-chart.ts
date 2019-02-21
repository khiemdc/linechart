export interface Parser {
    data: Array<number>;
    label: string;
  }  
  
  export interface PdfParserLineChart {
    parserList: Parser[];
    chartLabels: string[];
  }