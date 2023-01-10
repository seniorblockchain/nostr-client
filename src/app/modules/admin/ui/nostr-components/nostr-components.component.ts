import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NostrNavigationItem } from '@theme/components/navigation';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { NostrMediaWatcherService } from '@theme/services/media-watcher';

@Component({
    selector     : 'nostr-components',
    templateUrl  : './nostr-components.component.html',
    styleUrls    : ['./nostr-components.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NostrComponentsComponent implements OnInit, OnDestroy
{
    @ViewChild('matDrawer', {static: true}) matDrawer: MatDrawer;
    drawerMode: 'side' | 'over';
    drawerOpened: boolean;
    menuData: NostrNavigationItem[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _nostrMediaWatcherService: NostrMediaWatcherService
    )
    {
        this.menuData = [
            {
                id      : 'nostr-components.libraries',
                title   : 'Libraries',
                type    : 'group',
                children: [
                    {
                        id   : 'nostr-components.libraries.mock-api',
                        title: 'MockAPI',
                        type : 'basic',
                        link : '/ui/nostr-components/libraries/mock-api'
                    }
                ]
            },
            {
                id      : 'nostr-components.components',
                title   : 'Components',
                type    : 'group',
                children: [
                    {
                        id   : 'nostr-components.components.alert',
                        title: 'Alert',
                        type : 'basic',
                        link : '/ui/nostr-components/components/alert'
                    },
                    {
                        id   : 'nostr-components.components.card',
                        title: 'Card',
                        type : 'basic',
                        link : '/ui/nostr-components/components/card'
                    },
                    {
                        id   : 'nostr-components.components.drawer',
                        title: 'Drawer',
                        type : 'basic',
                        link : '/ui/nostr-components/components/drawer'
                    },
                    {
                        id   : 'nostr-components.components.fullscreen',
                        title: 'Fullscreen',
                        type : 'basic',
                        link : '/ui/nostr-components/components/fullscreen'
                    },
                    {
                        id   : 'nostr-components.components.highlight',
                        title: 'Highlight',
                        type : 'basic',
                        link : '/ui/nostr-components/components/highlight'
                    },
                    {
                        id   : 'nostr-components.components.loading-bar',
                        title: 'Loading Bar',
                        type : 'basic',
                        link : '/ui/nostr-components/components/loading-bar'
                    },
                    {
                        id   : 'nostr-components.components.masonry',
                        title: 'Masonry',
                        type : 'basic',
                        link : '/ui/nostr-components/components/masonry'
                    },
                    {
                        id   : 'nostr-components.components.navigation',
                        title: 'Navigation',
                        type : 'basic',
                        link : '/ui/nostr-components/components/navigation'
                    }
                ]
            },
            {
                id      : 'nostr-components.directives',
                title   : 'Directives',
                type    : 'group',
                children: [
                    {
                        id   : 'nostr-components.directives.scrollbar',
                        title: 'Scrollbar',
                        type : 'basic',
                        link : '/ui/nostr-components/directives/scrollbar'
                    },
                    {
                        id   : 'nostr-components.directives.scroll-reset',
                        title: 'ScrollReset',
                        type : 'basic',
                        link : '/ui/nostr-components/directives/scroll-reset'
                    }
                ]
            },
            {
                id      : 'nostr-components.services',
                title   : 'Services',
                type    : 'group',
                children: [
                    {
                        id   : 'nostr-components.services.config',
                        title: 'Config',
                        type : 'basic',
                        link : '/ui/nostr-components/services/config'
                    },
                    {
                        id   : 'nostr-components.services.confirmation',
                        title: 'Confirmation',
                        type : 'basic',
                        link : '/ui/nostr-components/services/confirmation'
                    },
                    {
                        id   : 'nostr-components.services.splash-screen',
                        title: 'SplashScreen',
                        type : 'basic',
                        link : '/ui/nostr-components/services/splash-screen'
                    },
                    {
                        id   : 'nostr-components.services.media-watcher',
                        title: 'MediaWatcher',
                        type : 'basic',
                        link : '/ui/nostr-components/services/media-watcher'
                    }
                ]
            },
            {
                id      : 'nostr-components.pipes',
                title   : 'Pipes',
                type    : 'group',
                children: [
                    {
                        id   : 'nostr-components.pipes.find-by-key',
                        title: 'FindByKey',
                        type : 'basic',
                        link : '/ui/nostr-components/pipes/find-by-key'
                    }
                ]
            },
            {
                id      : 'nostr-components.validators',
                title   : 'Validators',
                type    : 'group',
                children: [
                    {
                        id   : 'nostr-components.validators.must-match',
                        title: 'MustMatch',
                        type : 'basic',
                        link : '/ui/nostr-components/validators/must-match'
                    }
                ]
            }
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to media query change
        this._nostrMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode and drawerOpened
                if ( matchingAliases.includes('md') )
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
