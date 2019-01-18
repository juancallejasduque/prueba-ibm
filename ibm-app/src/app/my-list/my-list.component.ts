import { Component, OnInit } from '@angular/core';

import {Client} from '../shared/models/client.model'
import {ClientService} from '../core/services/client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  title = 'Lista';
  clientList;

  constructor(private clientService: ClientService) { 
    
  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientList = [];
    this.clientService.getClientLinks().subscribe((data: {}) => {
      console.log(data);
      this.clientList = data;
    });
  }

}
