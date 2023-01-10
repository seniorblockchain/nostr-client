import { Component, ViewEncapsulation } from '@angular/core';
import { nostrAnimations } from '@theme/animations';

@Component({
    selector     : 'confirmation-required-fullscreen',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : nostrAnimations
})
export class ConfirmationRequiredFullscreenComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
