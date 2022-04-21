// Angular imports
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// PrimeNG imports
import {MessageService, PrimeNGConfig} from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
// Local imports
import {Registrar} from '../../model/Registrar';
import {RegistrarService} from '../../service/Registrar.service';
import {RegistrarSaveModalComponent} from '../Registrar-save-modal/Registrar-save-modal.component';

@Component({
  selector: 'app-Registrar-list',
  templateUrl: './Registrar-list.component.html',
  styleUrls: ['./Registrar-list.component.scss']
})
export class RegistrarListComponent implements OnInit {
  registrar: Registrar[];
  selectedRegistrar: Registrar;

  constructor(private RegistrarService: RegistrarService, private router: Router, private primengConfig: PrimeNGConfig, private messageService: MessageService, public dialogService: DialogService) {
  }

  ngOnInit() {
    this.RegistrarService.getAll().subscribe(data => this.registrar = data);
    this.primengConfig.ripple = true;
  }

  onRowSelect($event: any) {
    this.router.navigate(['registrar', $event.data.id]);
  }

  deleteRegistrar(Registrar: Registrar) {
    this.RegistrarService.delete(Registrar.id).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Registrar deleted'});
    });
  }

  openCreateModal() {
    const ref = this.openModal(new Registrar(), 'Add Registrar');
    ref.onClose.subscribe((Registrar: Registrar) => {
      if (Registrar) {
        this.RegistrarService.create(Registrar).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Registrar created'});
        });
      }
    });
  }

  openEditModal(selectedRegistrar: Registrar) {
    const ref = this.openModal(selectedRegistrar, 'Edit Registrar');
    ref.onClose.subscribe((Registrar: Registrar) => {
      if (Registrar) {
        this.RegistrarService.update(Registrar.id, Registrar).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Registrar updated'});
        });
      }
    });
  }

  openModal(Registrar: Registrar, header: string): DynamicDialogRef {
    return this.dialogService.open(RegistrarSaveModalComponent, {
      data: {Registrar},
      header,
      contentStyle: {'max-height': '500px', 'overflow': 'auto'},
      baseZIndex: 10000
    });
  }
}
