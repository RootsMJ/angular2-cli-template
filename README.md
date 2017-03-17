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
=======
##Start
Angular2 med Typescript 2 Template för uppstart av projekt. Se [README](https://github.com/KM-Development/angular2-setup/wiki "Angular2 Template Wiki") för mer information.

***

## Innehållsförteckning
* [Projektöversikt](#project-overview)
* [Snabbstart](#getting-started)
    * [Förutsättningar](#dependencies)
    * [Installation](#installing)
    * [Kör applikationen](#running-the-app)
* [Filstruktur](#file-structure)
* [Konfiguration](#configuration)
* [AoT, Vad man ska undvika](#aot-donts)
* [Externa Stylesheets](#external-stylesheets)
* [TypeScript](#typescript)
* [@Types](#types)
* [FAQ](#frequently-asked-questions)
* [License](#license)

***

## Projektöversikt

* Använder [Webpack 2](http://webpack.github.io/) som system för att hantera flöden för byggprocesser, felhantering, minifiering, bundling och mycket mer.
* Rekommenderade metoder i fil- och applikationsstruktur för Angular 2.
* Fungerande byggsystem med Webpack för att arbeta med TypeScript.
* Angular 2 exempelfiler som fungerar som mallar för uppkommande projekt.
* Ahead of Time (AoT) compile for rapid page loads of your production builds.
* "Tree-shaking" automatiskt rensa applikationens beroenden från onödig kod.
* [Webpack DLL-filer](https://robertknight.github.io/posts/webpack-dll-plugins/) ökar
 dramatiskt systemets byggtider, tester etc. och i längden teamets produktivitet.
* Unit-Tester för Angular 2 med Jasmine och Karma.
* Kodtäckning med Istanbul och Karma.
* Integration- och systemtester för Angular 2 med Protractor.
* Typhantering för TypeScript with @types.
* Hot Module Replacement (HMR) med Webpack2, [@angularclass/hmr](https://github.com/angularclass/angular2-hmr) och [@angularclass/hmr-loader](https://github.com/angularclass/angular2-hmr-loader)
* Material Design med [angular/material2](https://github.com/angular/material2)
* Angular 4 support via ändringar på package.json-filer.


***

## Snabbstart
**Kolla först att du har Node version >= 5.0 och NPM >= 3 installerade**

```bash/powershell/cmd  
# klona repot
# --depth 1:  Tar bort all git historik förutom senaste. Bra för att skapa nytt projekt. 
git clone --depth 1 https://github.com/angularclass/angular2-webpack-starter.git

# Navigera valfri konsol till den nya projektmappen:
cd angular2-webpack-starter

# Installera alla beroenden och bibliotek som behövs från npm.
npm install

# starta development-servern
npm start

# Använd "Hot Module Replacement":
npm run server:dev:hmr
```

Gå till [http://localhost:5002](http://localhost:5002) eller den adress och port du valt

***

## Filstruktur
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
angular2-setup/
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
