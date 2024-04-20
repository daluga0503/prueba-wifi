import { Component, OnInit } from '@angular/core';

import { Network } from '@capacitor/network';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.checkNetworkStatus();
  }

  /*
  initializeNetworkListener() {
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
    });
  }

  // Method to check current network status
  async checkNetworkStatus() {
    const status = await Network.getStatus();
    console.log('Current network status:', status);
  }
  */

  async checkNetworkStatus() {
    const status = await Network.getStatus();
    console.log('Current network status:', status);

    // Setting up the listener for network status changes
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
    });
  }
}


