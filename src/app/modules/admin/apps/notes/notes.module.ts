import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NostrCardModule } from '@theme/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { notesRoutes } from './notes.routing';
import { NotesComponent } from './notes.component';

@NgModule({
    declarations: [
        NotesComponent
    ],
    imports     : [
        RouterModule.forChild(notesRoutes),
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatTooltipModule,
        NostrCardModule,
        SharedModule
    ]
})
export class NotesModule
{
}
