import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NostrConfirmationConfig } from '@theme/services/confirmation/confirmation.types';

@Component({
    selector     : 'nostr-confirmation-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        `
            .nostr-confirmation-dialog-panel {

                @screen md {
                    @apply w-128;
                }

                .mat-mdc-dialog-container {

                    .mat-mdc-dialog-surface {
                        padding: 0 !important;
                    }
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class NostrConfirmationDialogComponent
{
    /**
     * Constructor
     */
    constructor(@Inject(MAT_DIALOG_DATA) public data: NostrConfirmationConfig)
    {
    }

}
