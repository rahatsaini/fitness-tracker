import { NgModule  } from "@angular/core";
import {MatButtonModule} from '@angular/material';
import {MatIconModule,MatInputModule,MatDatepickerModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule
}
from '@angular/material';

@NgModule({
    imports:[MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule],
    exports:[MatButtonModule,MatIconModule ,MatFormFieldModule ,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule]
})

export class MaterialModule {}