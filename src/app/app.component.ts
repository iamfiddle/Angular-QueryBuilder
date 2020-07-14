import { Component } from '@angular/core';
import { QueryBuilderConfig, QueryBuilderClassNames } from 'angular2-query-builder';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qb';
 
  data = {
    seasoned: { name: 'Seasoning', type: 'number' },
    trueBalance: { name: 'TrueBalance', type: 'number' },
    brandCode: {
      name: 'BrandCode',
      type: 'category',
      options: [
        { name: 'ROI', value: 'roi' },
        { name: 'UK', value: 'uk' }
      ]
    },
    maturityDate:{
      name:'MaturityDate',
      type: 'date'
    }
  };
  //query={};
  query = {
    condition: 'or',
    rules: [
      { field: 'seasoned', operator: '<=', value: 'Bob' },
      { field: 'trueBalance', operator: '>=', value: 'm' },
      //{field: 'maturityDate', operator: '>=', value: 'm'}
    ]
  };

  config: QueryBuilderConfig = {
    fields: this.data//{
    // seasoned: {name: 'Seasoning', type: 'number'},
    // trueBalance: {name: 'TrueBalance', type: 'number'},
    // maturityDate: {
    //   name: 'MaturityDate',
    //   type: 'category',
    //   options: [
    //     {name: 'Male', value: 'm'},
    //     {name: 'Female', value: 'f'}
    //   ]
    // }
    //}
  }

  classNames: QueryBuilderClassNames = {
    removeIcon: 'fa fa-times',
    addIcon: 'fa fa-plus',
    arrowIcon: 'fa fa-chevron-right px-2',
    button: 'btn btn-light',
    buttonGroup: 'btn-group',
    //rightAlign: 'order-12 ml-auto',
    switchRow: 'd-flex px-2',
    switchGroup: 'd-flex align-items-center',
    switchRadio: 'custom-control-input',
    switchLabel: 'custom-control-label',
    switchControl: 'custom-control custom-radio custom-control-inline',
    row: 'row p-2 m-1',
    rule: 'border',
    ruleSet: 'border; 1',
    invalidRuleSet: 'alert alert-danger',
    emptyWarning: 'text-danger mx-auto',
    operatorControl: 'form-control',
    operatorControlSize: 'col-auto pr-0',
    fieldControl: 'form-control',
    fieldControlSize: 'col-auto pr-0',
    entityControl: 'form-control',
    entityControlSize: 'col-auto pr-0',
    inputControl: 'form-control',
    inputControlSize: 'col-auto'
  }
}