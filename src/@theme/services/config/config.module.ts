import { ModuleWithProviders, NgModule } from '@angular/core';
import { NostrConfigService } from '@theme/services/config/config.service';
import { NOSTR_APP_CONFIG } from '@theme/services/config/config.constants';

@NgModule()
export class NostrConfigModule
{
    /**
     * Constructor
     */
    constructor(private _nostrConfigService: NostrConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<NostrConfigModule>
    {
        return {
            ngModule : NostrConfigModule,
            providers: [
                {
                    provide : NOSTR_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
