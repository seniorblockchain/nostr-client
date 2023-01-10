import { Component } from '@angular/core';
import { NostrNavigationItem, NostrNavigationService, NostrVerticalNavigationComponent } from '@theme/components/navigation';
import { NostrComponentsComponent } from 'app/modules/admin/ui/nostr-components/nostr-components.component';

@Component({
    selector   : 'navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent
{
    /**
     * Constructor
     */
    constructor(
        private _nostrNavigationService: NostrNavigationService,
        private _nostrComponentsComponent: NostrComponentsComponent
    )
    {

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get navigation item
     *
     * @param itemId
     * @param navigationName
     */
    getNavItem(itemId, navigationName): NostrNavigationItem | null
    {
        // Get the component -> navigation data -> item
        const navComponent = this._nostrNavigationService.getComponent<NostrVerticalNavigationComponent>(navigationName);

        // Return if the navigation component does not exist
        if ( !navComponent )
        {
            return null;
        }

        // Get the navigation item
        const navigation = navComponent.navigation;
        const item = this._nostrNavigationService.getItem(itemId, navigation);
        console.log(item);
        return item;
    }

    /**
     * Update badge title
     *
     * @param itemId
     * @param navigationName
     * @param title
     */
    updateBadgeTitle(itemId, navigationName, title): void
    {
        // Get the component -> navigation data -> item
        const navComponent = this._nostrNavigationService.getComponent<NostrVerticalNavigationComponent>(navigationName);

        // Return if the navigation component does not exist
        if ( !navComponent )
        {
            return null;
        }

        // Get the navigation item, update the badge and refresh the component
        const navigation = navComponent.navigation;
        const item = this._nostrNavigationService.getItem(itemId, navigation);
        item.badge.title = title;
        navComponent.refresh();
    }

    /**
     * Toggle disabled status
     *
     * @param itemId
     * @param navigationName
     */
    toggleDisabled(itemId, navigationName): void
    {
        // Get the component -> navigation data -> item
        const navComponent = this._nostrNavigationService.getComponent<NostrVerticalNavigationComponent>(navigationName);

        // Return if the navigation component does not exist
        if ( !navComponent )
        {
            return null;
        }

        // Get the navigation item, update the badge and refresh the component
        const navigation = navComponent.navigation;
        const item = this._nostrNavigationService.getItem(itemId, navigation);
        item.disabled = !item.disabled;
        navComponent.refresh();
    }

    /**
     * Swap navigation data
     *
     * @param navigationName
     */
    swapNavigationData(navigationName): void
    {
        // Get the component -> navigation data -> item
        const navComponent = this._nostrNavigationService.getComponent<NostrVerticalNavigationComponent>(navigationName);

        // Return if the navigation component does not exist
        if ( !navComponent )
        {
            return null;
        }

        // A navigation data to replace with
        const newNavigation: NostrNavigationItem[] = [
            {
                id      : 'supported-components',
                title   : 'Supported components',
                subtitle: 'Compatible third party components',
                type    : 'group',
                icon    : 'memory',
                children: [
                    {
                        id   : 'supported-components.apex-charts',
                        title: 'ApexCharts',
                        type : 'basic',
                        icon : 'insert_chart',
                        link : '/supported-components/apex-charts'
                    },
                    {
                        id   : 'supported-components.google-maps',
                        title: 'Google Maps',
                        type : 'basic',
                        icon : 'map',
                        link : '/supported-components/google-maps'
                    },
                    {
                        id   : 'supported-components.quill-editor',
                        title: 'Quill editor',
                        type : 'basic',
                        icon : 'font_download',
                        link : '/supported-components/quill-editor'
                    },
                    {
                        id   : 'supported-components.youtube-player',
                        title: 'Youtube player',
                        type : 'basic',
                        icon : 'play_circle_filled',
                        link : '/supported-components/youtube-player'
                    }
                ]
            }
        ];

        // Replace the navigation data
        navComponent.navigation = newNavigation;
        navComponent.refresh();
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
