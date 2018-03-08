import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ListService } from '../../../store/list/list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-app-add-list',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class AddListComponent implements OnInit {

  constructor( public _addService: ListService, private tostr: ToastrService, 
    private dialogRef: MatDialogRef<AddListComponent>) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null)
      this._addService.insertEmployee(employeeForm.value);
    else
      this._addService.updateEmployee(employeeForm.value);
    this.resetForm(employeeForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
    this.dialogRef.close(`${employeeForm.value}`);
  }
 
  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null)
      employeeForm.reset();
    this._addService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0,
    }
  }

}
