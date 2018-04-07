import { MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ListService } from '../../../store/list/list.service';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-app-add-list',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class AddListComponent implements OnInit {
  fileToUpload: any;
  user: any;
  task: any;
  ref: any;
  employeeForm: FormGroup;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    public _addService: ListService,
    private tostr: ToastrService,
    private dialogRef: MatDialogRef<AddListComponent>,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      position: ['', Validators.required],
      salary: ['', Validators.required],
      office: ['', Validators.required],
      avatar: null,
      location: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.resetForm();
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.employeeForm.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result
        });
      };
    }
  }

  onFormSubmit() {
    if (this.employeeForm.valid) {
      this.user = this.employeeForm.value;
      /* Any API call logic via services goes here */
      if (this.employeeForm.value) this._addService.insertEmployee(this.employeeForm.value);
      // else this._addService.updateEmployee(this.employeeForm.value);
      this.dialogRef.close(`${this.employeeForm.value}`);
      this.resetForm(this.employeeForm.value);
      this.tostr.success('Submitted Succcessfully', 'Employee Register');
    }
  }

  // onSubmit(employeeForm: NgForm) {
  //   if (employeeForm.value.$key == null) this._addService.insertEmployee(employeeForm.value);
  //   else this._addService.updateEmployee(employeeForm.value);
  //   this.resetForm(employeeForm);
  //   this.tostr.success('Submitted Succcessfully', 'Employee Register');
  //   this.dialogRef.close(`${employeeForm.value}`);
  // }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null) employeeForm.reset();
    this._addService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0,
      avatar: '',
      location: '',
      description: ''
    };
  }
}
