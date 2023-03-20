import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppModule } from "../app.module";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [HeaderComponent,
        FooterComponent
      
    ],
    imports: [
        CommonModule,
       
        
    ],
})
export class CoreModule { }
