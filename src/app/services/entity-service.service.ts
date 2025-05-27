import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityServiceService {

  private apiUrl = 'http://localhost:8080/api/entidades';

  constructor(
    private hhtp: HttpClient
  ) { }

  getAllEntities() {
    return this.hhtp.get(this.apiUrl);
  }

  createEntity(entity: any) {
    return this.hhtp.post(this.apiUrl, entity);
  }

}
