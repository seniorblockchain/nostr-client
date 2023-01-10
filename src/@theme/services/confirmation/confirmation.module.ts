import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NostrConfirmationService } from '@theme/services/confirmation/confirmation.service';
import { NostrConfirmationDialogComponent } from '@theme/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NostrConfirmationDialogComponent
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        NostrConfirmationService
    ]
})
export class NostrConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _nostrConfirmationService: NostrConfirmationService)
    {
    }
}
