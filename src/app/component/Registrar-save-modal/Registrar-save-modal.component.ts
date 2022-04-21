
import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PrimeNGConfig} from 'primeng/api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {Registrar} from '../../model/Registrar';

@Component({
  selector: 'Registrar-save-modal',
  templateUrl: './Registrar-save-modal.component.html',
  styleUrls: ['./Registrar-save-modal.component.scss']
})
export class RegistrarSaveModalComponent {
  @Input() showDialog: boolean;
  @Input() header: string;
  registrar: Registrar;
registrarForm: FormGroup;

  constructor(private primengConfig: PrimeNGConfig, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.registrar = this.config.data.Registrar;
    this.registrarForm = new FormGroup({
      id: new FormControl({value: this.registrar.id, disabled: this.registrar.id != null}, [Validators.required]),
      name: new FormControl(this.registrar.name, [Validators.required]),
      class: new FormControl(this.registrar.class, [Validators.required]),
      course: new FormControl(this.registrar.course, [Validators.required]),
      test: new FormControl(this.registrar.test, [Validators.required]),
      test_result: new FormControl(this.registrar.test_result, [Validators.required]),
    });
    this.primengConfig.ripple = true;
  }

  onSubmit() {
    this.formValuesToRegistrar();
    this.ref.close(this.registrar);
  }

  hideDialog() {
    this.ref.close(null);
  }

  formValuesToRegistrar() {
    this.registrar = this.registrarForm.getRawValue();
  }

}
