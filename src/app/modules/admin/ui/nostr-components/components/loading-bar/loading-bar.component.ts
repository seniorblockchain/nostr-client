import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { finalize } from 'rxjs';
import { NostrLoadingService } from '@theme/services/loading';
import { NostrComponentsComponent } from 'app/modules/admin/ui/nostr-components/nostr-components.component';

@Component({
    selector   : 'loading-bar',
    templateUrl: './loading-bar.component.html'
})
export class LoadingBarComponent
{
    apiCallStatus: string = '-';
    mode: 'determinate' | 'indeterminate' = 'indeterminate';
    sliderValue: number = 0;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _nostrComponentsComponent: NostrComponentsComponent,
        private _nostrLoadingService: NostrLoadingService
    )
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

    /**
     * Show the loading bar
     */
    showLoadingBar(): void
    {
        this._nostrLoadingService.show();
    }

    /**
     * Hide the loading bar
     */
    hideLoadingBar(): void
    {
        this._nostrLoadingService.hide();
    }

    /**
     * Set the auto mode
     *
     * @param change
     */
    setAutoMode(change: MatSlideToggleChange): void
    {
        this._nostrLoadingService.setAutoMode(change.checked);
    }

    /**
     * Make a fake API call
     */
    makeAPICall(): void
    {
        this.apiCallStatus = 'Waiting...';

        this._httpClient.get('https://jsonplaceholder.typicode.com/posts?_delay=2000')
            .pipe(finalize(() => {
                this.apiCallStatus = 'Finished!';
            }))
            .subscribe((response) => {
                console.log(response);
            });
    }

    /**
     * Toggle the mode
     */
    toggleMode(): void
    {
        // Show the loading bar
        this._nostrLoadingService.show();

        // Set the mode
        this.mode = this.mode === 'indeterminate' ? 'determinate' : 'indeterminate';
        this._nostrLoadingService.setMode(this.mode);
    }

    /**
     * Set the progress
     */
    setProgress(): void
    {
        this._nostrLoadingService.setProgress(this.sliderValue);
    }
}
