import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EntityServiceService } from '../../services/entity-service.service';

@Component({
  selector: 'app-listar-entidades',
  imports: [],
  templateUrl: './listar-entidades.component.html',
  styleUrls: ['./listar-entidades.component.css'],
  providers: [EntityServiceService  ]
})
export class ListarEntidadesComponent {

  entidades: any[] = [];

  constructor(private entityService: EntityServiceService) {}

  ngOnInit(): void {
    this.entityService.getAllEntities().subscribe((data: any[]) => {
      this.entidades = data;
    });
  }

}
