# Angular2CliTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## File structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
angular2-cli-template/
 ├──config/                        * Vår configuration
 |   ├──helpers.js                 * Helpers för våra konfigurationer
 |   ├──spec-bundle.js             * Skapar upp vårt Angular 2 testing environment
 |   ├──karma.conf.js              * Karma Config-fil för våra unit-tests
 |   ├──protractor.conf.js         * Protractor Config-fil för våra Systemtester
 │   ├──webpack.dev.js             * Vår Webpack Config-fil för Utvecklingsmiljö
 │   ├──webpack.prod.js            * Vår Webpack Config-fil för Produktionsmiljö
 │   └──webpack.test.js            * Vår Webpack Config-fil för Testningsmiljö
 │
 ├──src/                           * Vår källkod som transpilas till Javascript
 |   ├──main.browser.ts            * Vår startfil för Browsermiljön
 │   │
 |   ├──index.html                 * Index.html: Vår index-fil som är absolut första fil ||   |                               som man når vid start av applikationen.
 │   │
 |   ├──polyfills.ts               * Vår Polyfills (ger äldre browsers korrekta
 |   |                               fallback-funktioner eller extendar deras 
 |   |                               funktionalitet för att stödja moderna webbtekniker)
 │   │
 │   ├──app/                       * Gemensam mapp för vår faktiska applikationsfiler
 │   │   ├──app.component.spec.ts  * Ett enkelt unit-test för app.component.ts
 │   │   ├──app.e2e.ts             * Ett enkelt systemtest för / (Startsidan)
 │   │   └──app.component.ts       * En enkel version av vår AppComponent
 │   │
 │   └──assets/                    * statiska resurser serveras av servern härifrån
 │       ├──icon/                  * Våra ikonresurser 
 │       ├──service-worker.js      * Ignorera denna fil sålänge. En worker som inte är
 |       |                           färdigställd ännu
 │       ├──robots.txt             * För sökmotorers spindlar som går igenom dina sidor
 │       └──humans.txt             * För 
 │
 │
 ├──tslint.json                    * typescript lint config
 ├──typedoc.json                   * typescript documentation generator
 ├──tsconfig.json                  * typescript config used outside webpack
 ├──tsconfig.webpack.json          * config that webpack uses for typescript
 ├──package.json                   * what npm uses to manage it's dependencies
 └──webpack.config.js              * webpack main configuration file

```


### Under uppbyggnad...
