import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  showSecret = false;
  // log: number[] = [];
  log: Date[] = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created!Name is ${this.serverName}`;
  }
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onToggleDetails() { 
    this.showSecret = !this.showSecret; 
    // this.log.push(this.log.length + 1);  
    this.log.push(new Date());
  }
}
