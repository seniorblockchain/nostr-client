import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject, takeUntil } from 'rxjs';
import { NostrVerticalNavigationComponent } from '@theme/components/navigation/vertical/vertical.component';
import { NostrNavigationService } from '@theme/components/navigation/navigation.service';
import { NostrNavigationItem } from '@theme/components/navigation/navigation.types';

@Component({
    selector       : 'nostr-vertical-navigation-group-item',
    templateUrl    : './group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NostrVerticalNavigationGroupItemComponent implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_autoCollapse: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() autoCollapse: boolean;
    @Input() item: NostrNavigationItem;
    @Input() name: string;

    private _nostrVerticalNavigationComponent: NostrVerticalNavigationComponent;
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
        this._nostrVerticalNavigationComponent = this._nostrNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._nostrVerticalNavigationComponent.onRefreshed.pipe(
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
