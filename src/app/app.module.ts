import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import {MatButtonModule} from '@angular/material/button';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule  } from '@angular-material-components/datetime-picker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TodoPipe } from './todo.pipe';
import { ArrayPipe } from './array.pipe';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { DoneorderPipe } from './doneorder.pipe';


 
@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewComponent,
    TodoPipe,
    ArrayPipe,
    DoneorderPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    NgxMatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule

    
  
  ],
  providers: [
  
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
