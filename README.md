# Bersta-Preise: Abfrage & Foodsoft 

Das Projekt hat zum Ziel vom Bersta Online Shop die Produkte abzufragen, die letztlich in der Foodsoft verwaltet werden. Das Programm soll die Abfrage der Preise vereinfachen und einen kurzen Überblick geben. 

## Hintergrund 

Im Online Shop kann man ein Stichwort oder eine Artikelnummer suchen. Bersta verwendet die Artikelnummern 6-stellig, numerische und ganzahlig, mit führender Null.  

### Login

Eingabe der Zugangsdaten und einloggen. Die Suchabfrage wird erst möglich, wenn man sich erfolgreich eingeloggt hat (macht sonst wenig Sinn). 

### Eingabe & Suche 

Der Button Abfrage führt die Suche nach dem Stichwort durch. In den jeweiligen Suchfeldern wird durch die `Eingabe`-Taste (bzw `ENTER`) die jeweilige Suche durchgeführt. Das Feld `Artikelnummer` wird vor der Suche entsprechend formatiert.

### Suchergebnis

Die Ergebnisse der Suche wird in einer Tabelle angezeigt. Klicken auf einen Eintrag, zeigt den Preis an; gibt es nur einen Suchtreffer, werden die Details hierzu gleich angezeigt. 

## Entwicklung 

Die API Schnittstelle habe ich via dem Online Shop analysiert und entsprechend in Angular neu definiert worden. Die URLs sind direkt übernommen worden. Für die Suchabfrage kann diese ggf geändert werden. 

Es sind nur die Teile der DTOs übernommen worden, die auch ausgewertet werden. Ich habe mich dabei an die benötigten Daten der Foodsoft orientiert. 


# Angular 

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
