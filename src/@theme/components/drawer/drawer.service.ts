import { Injectable } from '@angular/core';
import { NostrDrawerComponent } from '@theme/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class NostrDrawerService
{
    private _componentRegistry: Map<string, NostrDrawerComponent> = new Map<string, NostrDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: NostrDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): NostrDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
