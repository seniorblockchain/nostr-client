import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { NostrConfirmationModule } from '@theme/services/confirmation';
import { NostrLoadingModule } from '@theme/services/loading';
import { NostrMediaWatcherModule } from '@theme/services/media-watcher/media-watcher.module';
import { NostrPlatformModule } from '@theme/services/platform/platform.module';
import { NostrSplashScreenModule } from '@theme/services/splash-screen/splash-screen.module';
import { NostrUtilsModule } from '@theme/services/utils/utils.module';

@NgModule({
    imports  : [
        NostrConfirmationModule,
        NostrLoadingModule,
        NostrMediaWatcherModule,
        NostrPlatformModule,
        NostrSplashScreenModule,
        NostrUtilsModule
    ],
    providers: [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class NostrModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: NostrModule)
    {
        if ( parentModule )
        {
            throw new Error('NostrModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
