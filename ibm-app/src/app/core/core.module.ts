import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { 

  clientList: any;

  constructor(private pageLinkService: ClientService) { 
    this.clientList = this.pageLinkService.getClients();
  }
}
