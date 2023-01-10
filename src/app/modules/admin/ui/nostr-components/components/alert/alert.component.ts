import { Component } from '@angular/core';
import { NostrAlertService } from '@theme/components/alert';
import { NostrComponentsComponent } from 'app/modules/admin/ui/nostr-components/nostr-components.component';

@Component({
    selector   : 'alert',
    templateUrl: './alert.component.html',
    styles     : [
        `
            nostr-alert {
                margin: 16px 0;
            }
        `
    ]
})
export class AlertComponent
{
    /**
     * Constructor
     */
    constructor(
        private _nostrAlertService: NostrAlertService,
        private _nostrComponentsComponent: NostrComponentsComponent
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss the alert via the service
     *
     * @param name
     */
    dismiss(name: string): void
    {
        // Dismiss
        this._nostrAlertService.dismiss(name);
    }

    /**
     * Show the alert via the service
     *
     * @param name
     */
    show(name: string): void
    {
        // Show
        this._nostrAlertService.show(name);
    }

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._nostrComponentsComponent.matDrawer.toggle();
    }
}
