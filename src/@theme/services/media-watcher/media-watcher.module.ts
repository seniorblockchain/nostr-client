import { NgModule } from '@angular/core';
import { NostrMediaWatcherService } from '@theme/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        NostrMediaWatcherService
    ]
})
export class NostrMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _nostrMediaWatcherService: NostrMediaWatcherService)
    {
    }
}
