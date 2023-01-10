import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { NostrMockApiService } from '@theme/lib/mock-api';
import { activities as activitiesData } from 'app/mock-api/pages/activities/data';

@Injectable({
    providedIn: 'root'
})
export class ActivitiesMockApi
{
    private _activities: any = activitiesData;

    /**
     * Constructor
     */
    constructor(private _nostrMockApiService: NostrMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Activities - GET
        // -----------------------------------------------------------------------------------------------------
        this._nostrMockApiService
            .onGet('api/pages/activities')
            .reply(() => [200, cloneDeep(this._activities)]);
    }
}
