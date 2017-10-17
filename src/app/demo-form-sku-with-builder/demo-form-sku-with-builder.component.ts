import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms'

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
                              'sku':['', Validators.compose([Validators.required, this.skuValidator])]
                            });


    this.myForm.controls['sku'].valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(value: string): void{
    console.log('you submitted value: ', value);
  }

  skuValidator(control: FormControl): {[s: string] : boolean}{
   if(!control.value.match('^123')){
     return {invalidSku: true};
   }
  }

}
