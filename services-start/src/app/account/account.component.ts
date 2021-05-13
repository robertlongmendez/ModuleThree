import { Component, Input} from '@angular/core';

import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }


}
// {--, AccountsService--}
// this was removed from the providers array, but left it the import of it

  // {--@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
// this.statusChanged.emit({id: this.id, newStatus: status});--}

//  {--console.log('A server status changed, new status: ' + status);--}
//  this code was replaced by calling the this.loggingService.logStatusChange(status);
