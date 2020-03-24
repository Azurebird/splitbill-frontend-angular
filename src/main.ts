import mongoose from 'mongoose';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

mongoose.connect('mongodb://localhost:27017/facturacion_app_test', { useNewUrlParser: true });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
