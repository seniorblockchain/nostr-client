import { Component, ViewEncapsulation } from '@angular/core';
import { nostrAnimations } from '@theme/animations';

@Component({
    selector     : 'colors',
    templateUrl  : './colors.component.html',
    animations   : nostrAnimations,
    encapsulation: ViewEncapsulation.None
})
export class ColorsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
