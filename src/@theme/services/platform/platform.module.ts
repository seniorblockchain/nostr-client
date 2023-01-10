import { NgModule } from '@angular/core';
import { NostrPlatformService } from '@theme/services/platform/platform.service';

@NgModule({
    providers: [
        NostrPlatformService
    ]
})
export class NostrPlatformModule
{
    /**
     * Constructor
     */
    constructor(private _nostrPlatformService: NostrPlatformService)
    {
    }
}
