import { NgModule } from '@angular/core';
import { NostrUtilsService } from '@theme/services/utils/utils.service';

@NgModule({
    providers: [
        NostrUtilsService
    ]
})
export class NostrUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _nostrUtilsService: NostrUtilsService)
    {
    }
}
