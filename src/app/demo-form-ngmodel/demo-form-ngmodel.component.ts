import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-ngmodel',
  templateUrl: './demo-form-ngmodel.component.html',
  styleUrls: ['./demo-form-ngmodel.component.css']
})
export class DemoFormNgmodelComponent implements OnInit {
  myForm: FormGroup;
  productName: string;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'productName': ['', Validators.required]
    });
  }

  onSubmit(value: string): void{
    console.log('You submitted value: ', value);
  }

  ngOnInit() {
  }
}
