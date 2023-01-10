import { Component } from '@angular/core';
import { NostrDrawerMode } from '@theme/components/drawer';
import { NostrComponentsComponent } from 'app/modules/admin/ui/nostr-components/nostr-components.component';

@Component({
    selector   : 'drawer',
    templateUrl: './drawer.component.html'
})
export class DrawerComponent
{
    drawerMode: NostrDrawerMode;
    drawerOpened: boolean;

    /**
     * Constructor
     */
    constructor(
        private _nostrComponentsComponent: NostrComponentsComponent
    )
    {
        // Set the defaults
        this.drawerMode = 'side';
        this.drawerOpened = true;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer mode
     */
    toggleDrawerMode(): void
    {
        this.drawerMode = this.drawerMode === 'side' ? 'over' : 'side';
    }

    /**
     * Toggle the drawer open
     */
    toggleDrawerOpen(): void
    {
        this.drawerOpened = !this.drawerOpened;
    }

    /**
     * Drawer opened changed
     *
     * @param opened
     */
    drawerOpenedChanged(opened: boolean): void
    {
        this.drawerOpened = opened;
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
