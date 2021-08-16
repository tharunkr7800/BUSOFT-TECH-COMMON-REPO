import { Component, Inject, NgZone, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import type { XYChart } from '@amcharts/amcharts4/charts';
import { NumberFormatStyle } from '@angular/common';

interface chartData {
  key: string;
  value: number;
}

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  count: any;
  severity: Array<chartData>;
  status: Array<chartData>;
  t5Products: Array<chartData>;
  t5Agents: Array<chartData>;
  constructor() {
    this.severity = [
      {
        key: 'Urgent',
        value: 30,
      },
      {
        key: 'Medium',
        value: 100,
      },
      {
        key: 'Low',
        value: 50,
      },
      {
        key: 'High',
        value: 40,
      },
    ];
    this.status = [
      {
        key: 'Waiting-Other',
        value: 20,
      },
      {
        key: 'Waiting-customer',
        value: 60,
      },
      {
        key: 'Updated',
        value: 40,
      },
      {
        key: 'Unresolved',
        value: 100,
      },
      {
        key: 'Ongoing',
        value: 20,
      },
    ];
    this.t5Products =[
      {
        key:"E-mail",
        value:20
      },
      {
        key:"No value",
        value:30
      },
      {
        key:"Incidents",
        value:25
      },
      {
        key:"Other",
        value:23
      },
      {
        key:"Incidents",
        value:24
      },
      {
        key:"User accounts",
        value:35
      }
    ];
    this.t5Agents = [
      {
        key:"Viji Raju",
        value:15
      },
      {
        key:"Garath Toon",
        value:15
      },
      {
        key:"Vijayalakshmi Rajagopalan",
        value:25
      },
      {
        key:"Craig Seagrave",
        value:30
      },
      {
        key:"Tim Porch",
        value:30
      }
    ]
  }

  renderChart(data: any, element: string) {
    // Create chart instance
    let chart = am4core.create(element, am4charts.XYChart);
    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = 'key';
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = 'key';
    series.dataFields.valueX = 'value';
    series.tooltipText = '{valueX.value}';
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;

    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.horizontalCenter = 'left';
    labelBullet.label.dx = 10;
    labelBullet.label.text =
      "{values.valueX.workingValue.formatNumber('#')}";
    labelBullet.locationX = 1;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add('fill', (fill, target) => {
      if (target.dataItem) {
        return chart.colors.getIndex(target.dataItem.index);
      } else {
        return chart.colors.getIndex(0);
      }
    });

    //categoryAxis.sortBySeries = series;
    chart.data = data;
  }
  ngOnInit(): void {
    this.renderChart(this.severity,"severity");
    this.renderChart(this.status,"status");
    this.renderChart(this.t5Products,"product");
    this.renderChart(this.status,"agents");
  }
}
