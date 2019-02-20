import { NgModule  } from "@angular/core";
import {MatButtonModule} from '@angular/material';
import {MatIconModule,MatInputModule,MatDatepickerModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule  
}
from '@angular/material';

@NgModule({
    imports:[MatButtonModule,MatListModule,MatIconModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatToolbarModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule],
    exports:[MatButtonModule,MatListModule,MatIconModule ,MatFormFieldModule ,MatInputModule,MatDatepickerModule,MatToolbarModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule]
})

export class MaterialModule {}