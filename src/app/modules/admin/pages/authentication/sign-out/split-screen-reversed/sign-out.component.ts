import { Component, ViewEncapsulation } from '@angular/core';
import { nostrAnimations } from '@theme/animations';
import { AuthService } from 'app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector     : 'sign-out-split-screen-reversed',
    templateUrl  : './sign-out.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : nostrAnimations
})
export class SignOutSplitScreenReversedComponent
{
    countdown: number = 5;
    countdownMapping: any = {
        '=1'   : '# second',
        'other': '# seconds'
    };

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _router: Router
    )
    {
    }
}
