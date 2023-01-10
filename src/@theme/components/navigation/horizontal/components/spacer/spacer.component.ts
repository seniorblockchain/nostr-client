import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NostrHorizontalNavigationComponent } from '@theme/components/navigation/horizontal/horizontal.component';
import { NostrNavigationService } from '@theme/components/navigation/navigation.service';
import { NostrNavigationItem } from '@theme/components/navigation/navigation.types';

@Component({
    selector       : 'nostr-horizontal-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NostrHorizontalNavigationSpacerItemComponent implements OnInit, OnDestroy
{
    @Input() item: NostrNavigationItem;
    @Input() name: string;

    private _nostrHorizontalNavigationComponent: NostrHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _nostrNavigationService: NostrNavigationService
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
        // Get the parent navigation component
        this._nostrHorizontalNavigationComponent = this._nostrNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._nostrHorizontalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
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
