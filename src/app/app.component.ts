import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search Vendor Solution';
  myVar = true;
  data = [{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018"
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018"
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018"
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018"
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018"
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018"
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018"
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018"
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018"
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018"
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018"
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018"
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018"
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018"
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018"
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018"
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018"
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018"
  }]
  constructor() { }

  

  // showEditView(index) {
  //   // if (this.myVar === true) {
  //   //   this.myVar = false
  //   // }
  //   // else {
  //   //   this.myVar = true
  //   // }
  //   this.data[index]['editable'] = true;
  //   // this.data.forEach((element, i) => {
  //   //   console.log('test');
  //   //   if (i === index) {
  //   //     element['editable'] = true;
  //   //   }
  //   // })
  // }

  // cancel(index) {
  //   this.data.forEach((element, i) => {
      
  //     if (i === index) {
  //       element['editable'] = false;
  //     }
  //   })
  // }

}

