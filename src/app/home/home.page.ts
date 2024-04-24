import { Component, OnInit } from '@angular/core';

import { ConnectionStatus, Network } from '@capacitor/network';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  networkStatusChange:string ="";

  networkStatus!: ConnectionStatus


  constructor() {}

  ngOnInit(): void {
    Network.getStatus().then((status)=>{
      this.networkStatus = status;
      console.log(this.networkStatus);
    })
    Network.addListener( "networkStatusChange", (status) =>{
      this.networkStatus = status;
      console.log(this.networkStatus);
    })

    /*
    window.addEventListener('online', ()=>{
      console.log('online');
      this.networkStatusChange="online"
    })
    window.addEventListener('offline', () => {
      console.log('offline');
      this.networkStatusChange = "offline";
    })
    */
  }
}


