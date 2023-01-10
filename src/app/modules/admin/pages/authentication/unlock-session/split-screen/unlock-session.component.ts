import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { nostrAnimations } from '@theme/animations';
import { NostrAlertType } from '@theme/components/alert';

@Component({
    selector     : 'unlock-session-split-screen',
    templateUrl  : './unlock-session.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : nostrAnimations
})
export class UnlockSessionSplitScreenComponent implements OnInit
{
    @ViewChild('unlockSessionNgForm') unlockSessionNgForm: NgForm;

    alert: { type: NostrAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    name: string = 'Milad Raeisi';
    showAlert: boolean = false;
    unlockSessionForm: UntypedFormGroup;

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: UntypedFormBuilder
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.unlockSessionForm = this._formBuilder.group({
            name    : [
                {
                    value   : this.name,
                    disabled: true
                }
            ],
            password: ['', Validators.required]
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Unlock
     */
    unlock(): void
    {
    }
}
