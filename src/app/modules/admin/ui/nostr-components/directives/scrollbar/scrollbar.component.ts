import { Component } from '@angular/core';
import { NostrComponentsComponent } from 'app/modules/admin/ui/nostr-components/nostr-components.component';

@Component({
    selector   : 'scrollbar',
    templateUrl: './scrollbar.component.html'
})
export class ScrollbarComponent
{
    /**
     * Constructor
     */
    constructor(private _nostrComponentsComponent: NostrComponentsComponent)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._nostrComponentsComponent.matDrawer.toggle();
    }
}
