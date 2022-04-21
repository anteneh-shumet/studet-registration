// Angular imports
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// Local imports
import {RegistrarService} from '../../service/Registrar.service';
import {Registrar} from '../../model/Registrar';

@Component({
  selector: 'app-Registrar-details',
  templateUrl: './Registrar-details.component.html',
  styleUrls: ['./Registrar-details.component.scss']
})
export class RegistrarDetailsComponent implements OnInit {
  Registrar: Registrar;
  goBackUrl = '..';

  constructor(private RegistrarService: RegistrarService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const name: string = this.route.snapshot.paramMap.get('id');
    this.RegistrarService.get(name).subscribe(data => this.Registrar = data);
  }
}
