import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, QueryList, Renderer2, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { NostrCardComponent } from '@theme/components/card';

@Component({
    selector       : 'cards',
    templateUrl    : './cards.component.html',
    styles         : [
        `
            cards nostr-card {
                margin: 16px;
            }
        `
    ],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements AfterViewInit
{
    @ViewChildren(NostrCardComponent, {read: ElementRef}) private _nostrCards: QueryList<ElementRef>;

    filters: string[] = ['all', 'article', 'listing', 'list', 'info', 'shopping', 'pricing', 'testimonial', 'post', 'interactive'];
    numberOfCards: any = {};
    selectedFilter: string = 'all';

    /**
     * Constructor
     */
    constructor(private _renderer2: Renderer2)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Calculate the number of cards
        this._calcNumberOfCards();

        // Filter the cards for the first time
        this._filterCards();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On filter change
     *
     * @param change
     */
    onFilterChange(change: MatButtonToggleChange): void
    {
        // Set the filter
        this.selectedFilter = change.value;

        // Filter the cards
        this._filterCards();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private _calcNumberOfCards(): void
    {
        // Prepare the numberOfCards object
        this.numberOfCards = {};

        // Prepare the count
        let count = 0;

        // Go through the filters
        this.filters.forEach((filter) => {

            // For each filter, calculate the card count
            if ( filter === 'all' )
            {
                count = this._nostrCards.length;
            }
            else
            {
                count = this.numberOfCards[filter] = this._nostrCards.filter(nostrCard => nostrCard.nativeElement.classList.contains('filter-' + filter)).length;
            }

            // Fill the numberOfCards object with the counts
            this.numberOfCards[filter] = count;
        });
    }

    /**
     * Filter the cards based on the selected filter
     *
     * @private
     */
    private _filterCards(): void
    {
        // Go through all nostr-cards
        this._nostrCards.forEach((nostrCard) => {

            // If the 'all' filter is selected...
            if ( this.selectedFilter === 'all' )
            {
                // Remove hidden class from all cards
                nostrCard.nativeElement.classList.remove('hidden');
            }
            // Otherwise...
            else
            {
                // If the card has the class name that matches the selected filter...
                if ( nostrCard.nativeElement.classList.contains('filter-' + this.selectedFilter) )
                {
                    // Remove the hidden class
                    nostrCard.nativeElement.classList.remove('hidden');
                }
                // Otherwise
                else
                {
                    // Add the hidden class
                    nostrCard.nativeElement.classList.add('hidden');
                }
            }
        });
    }
}
