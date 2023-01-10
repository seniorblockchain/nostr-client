import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { merge } from 'lodash-es';
import { NostrConfirmationDialogComponent } from '@theme/services/confirmation/dialog/dialog.component';
import { NostrConfirmationConfig } from '@theme/services/confirmation/confirmation.types';

@Injectable()
export class NostrConfirmationService
{
    private _defaultConfig: NostrConfirmationConfig = {
        title      : 'Confirm action',
        message    : 'Are you sure you want to confirm this action?',
        icon       : {
            show : true,
            name : 'heroicons_outline:exclamation',
            color: 'warn'
        },
        actions    : {
            confirm: {
                show : true,
                label: 'Confirm',
                color: 'warn'
            },
            cancel : {
                show : true,
                label: 'Cancel'
            }
        },
        dismissible: false
    };

    /**
     * Constructor
     */
    constructor(
        private _matDialog: MatDialog
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    open(config: NostrConfirmationConfig = {}): MatDialogRef<NostrConfirmationDialogComponent>
    {
        // Merge the user config with the default config
        const userConfig = merge({}, this._defaultConfig, config);

        // Open the dialog
        return this._matDialog.open(NostrConfirmationDialogComponent, {
            autoFocus   : false,
            disableClose: !userConfig.dismissible,
            data        : userConfig,
            panelClass  : 'nostr-confirmation-dialog-panel'
        });
    }
}
