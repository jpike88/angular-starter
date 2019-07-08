
import 'reflect-metadata';

import 'core-js/features/symbol';
import 'core-js/features/object';
import 'core-js/features/function';
import 'core-js/features/parse-int';
import 'core-js/features/parse-float';
import 'core-js/features/number';
import 'core-js/features/math';
import 'core-js/features/string';
import 'core-js/features/date';
import 'core-js/features/array';
import 'core-js/features/regexp';
import 'core-js/features/map';
import 'core-js/features/weak-map';
import 'core-js/features/set';
import 'zone.js/dist/zone';  // Included with Angular CLI

/**
 * Angular bootstrapping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'environments/environment';
import { NgModuleRef } from '@angular/core';
/**
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app';
import { ROOT_SELECTOR } from './app/app.component';

/**
 * Bootstrap our Angular app with a top level NgModule
 */
export function main() {
  platformBrowserDynamic().bootstrapModule(AppModule);
}

/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

function _domReadyHandler() {
 document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
 main();
}
