import { NgModule } from '@angular/core';
import { NostrSplashScreenService } from '@theme/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        NostrSplashScreenService
    ]
})
export class NostrSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _nostrSplashScreenService: NostrSplashScreenService)
    {
    }
}
