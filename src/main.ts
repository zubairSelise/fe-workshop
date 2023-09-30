import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app-routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
bootstrapApplication(AppComponent, {
	providers: [provideAnimations(), provideHttpClient(), provideRouter(APP_ROUTES)]
}).catch((error) => console.error(error));
