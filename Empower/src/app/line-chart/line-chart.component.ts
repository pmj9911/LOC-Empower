import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';
@Component({ 
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  LineChart;
  LineChart1;
  ngOnInit() {
  this.LineChart = new Chart('lineChart',{
    type:'line',
  data:{
    labels:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
    datasets:[{
      label:'Number Of Schools Being Helped Each Months',
      data:[9,7,3,5,2,10,15,16,19,3,1,9],
      fill:false,
      lineTension:0.2,
      borderColor:"red",
      borderWidth:2
    }]  
  },
  options:{
    title:{
      text:"Line Chart",
      display:true
    },
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero:true
        }
      }]
    }
  }
});
  this.LineChart1 = new Chart('lineChart1',{
    type:'line',
  data:{
    labels:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
    datasets:[{
      label:'Number Of Orphanges Being Helped Each Months',
      data:[9,7,3,5,2,10,15,16,19,3,1,9],
      fill:false,
      lineTension:0.2,
      borderColor:"blue",
      borderWidth:2
    }]  
  },
  options:{
    title:{
      text:"Line Chart",
      display:true
    },
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero:true
        }
      }]
    }
  }
});
}
}
