import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'sf-quickpanel',
  templateUrl: './quickpanel.component.html',
  styleUrls: ['./quickpanel.component.scss']
})
export class QuickpanelComponent implements OnInit {

  todayDay: string;
  todayDate: string;
  todayDateSuffix: string;
  todayMonth: string;

  constructor() { }


  ngOnInit() {
    var day = moment().lang('sv').format("dddd")
    day = day[0].toUpperCase() + day.substr(1)

    var month = moment().lang('sv').format("MMMM")
    month = month[0].toUpperCase() + month.substr(1)

    this.todayDay = day;
    this.todayDate = moment().lang('sv').format('Do');
    this.todayDate = this.todayDate.replace(/\D/g, '');
    this.todayDateSuffix = moment().lang('sv').format('Do');
    this.todayDateSuffix = this.todayDateSuffix.replace(/[0-9]/g, '');
    this.todayMonth = " " + month;
  }

}
