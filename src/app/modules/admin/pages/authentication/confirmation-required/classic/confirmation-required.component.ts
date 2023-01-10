import { Component, ViewEncapsulation } from '@angular/core';
import { nostrAnimations } from '@theme/animations';

@Component({
    selector     : 'confirmation-required-classic',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : nostrAnimations
})
export class ConfirmationRequiredClassicComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
