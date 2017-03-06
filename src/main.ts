import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {environment} from "./environments/environment";
import {HelixAppModule} from "./app/";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(HelixAppModule)
  .catch(err => console.error(err));
