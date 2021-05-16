import { Component } from '@angular/core';

import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {


  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {
      this.accountsService.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      );
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);

  }
}

// {--EventEmitter, Output

//  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

// this.accountAdded.emit({
//       name: accountName,
//       status: accountStatus
//     });--}
//  this code is no longer being listened to, and instead inject accountsService through the constructor and add it to the provider also


//  removed when we got rid of creating the instance manually


//  {--const service = new LoggingService();
//     service.logStatusChange(accountStatus)--}
//  this code is not how you use a service in angular, you should not create the instances manually

  //  {--console.log('A server status changed, new status: ' + accountStatus);--}
  //  this code was replaced by importing the logging service at the top and calling service.logStatusChange
