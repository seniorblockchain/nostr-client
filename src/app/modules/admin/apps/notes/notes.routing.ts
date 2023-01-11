import { Route } from '@angular/router';
import { NotesComponent } from 'app/modules/admin/apps/notes/notes.component';

export const notesRoutes: Route[] = [
    {
        path     : '',
        component: NotesComponent
    }
];
