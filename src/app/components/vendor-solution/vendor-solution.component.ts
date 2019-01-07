import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-solution',
  templateUrl: './vendor-solution.component.html',
  styleUrls: ['./vendor-solution.component.css']
})
export class VendorSolutionComponent implements OnInit {

  data = [{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },{
    title: "Vendor Solution",
    text: "Some dummy text Here",
    details: "Blair B. |Last updated Oct 23, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  },
  {
    title: "Vendor Solution",
    text: "Some more dummy text Here",
    details: "Blair B. |Last updated Oct 24, 2018",
    tags: ["tag name 1","tag name 2","tag name 3"]
  }]

  constructor() { }

  showEditView(index){
    this.data[index]['editable'] = true;
  }

  cancel(index) {
    this.data.forEach((element, i) => {
      
      if (i === index) {
        element['editable'] = false;
      }
    })
  }

  ngOnInit() {
  }

}
