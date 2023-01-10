import { Component, ViewEncapsulation } from '@angular/core';
import { nostrAnimations } from '@theme/animations';

@Component({
    selector     : 'confirmation-required-split-screen',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : nostrAnimations
})
export class ConfirmationRequiredSplitScreenComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
