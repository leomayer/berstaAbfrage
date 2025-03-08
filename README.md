# Bersta-Preise: Abfrage & Foodsoft 

Das Projekt hat zum Ziel vom Bersta Online Shop die Produkte abzufragen, die letztlich in der Foodsoft verwaltet werden. Das Programm soll die Abfrage der Preise vereinfachen und einen kurzen Überblick geben. 

## Hintergrund 

Im Online Shop kann man ein Stichwort oder eine Artikelnummer suchen. Bersta verwendet die Artikelnummern 6-stellig, numerische und ganzahlig, mit führender Null.  

### Login

Eingabe der Zugangsdaten und einloggen. Die Suchabfrage wird erst möglich, wenn man sich erfolgreich eingeloggt hat (macht sonst wenig Sinn). 

### Eingabe & Suche 

Der Button Abfrage führt die Suche nach dem Stichwort durch. In den jeweiligen Suchfeldern wird durch die `Eingabe`-Taste (bzw `ENTER`) die jeweilige Suche durchgeführt. Das Feld `Artikelnummer` wird vor der Suche entsprechend formatiert.

Die Ergebnisse der Suche wird in einer Tabelle angezeigt. Klicken auf einen Eintrag, zeigt den Preis an; gibt es nur einen Suchtreffer, werden die Details hierzu gleich angezeigt. 

### Excel-Spalten 

Man kann in der Foodsoft von einem Besteller die Artikel exportiert. Dieser Export wird in eine CSV Datei gespeichert, die mit Excel importieren werden kann. Der Export besteht aus 14 Spalten, von denen 2 nicht befüllt sind. 

Im Eingabefeld kann man eine ganze Excel Zeile einfügen; die Werte je Spalte sind mittels Tabulator getrennt. `Übernehmen` macht folgende Aktionen:

1. Aufteilen die Spalten gem. Spalten 
2. 2. Spalte wird in die zuvor beschriebene Suche als Bersta-Artikelnummer übernommen; die 1. Spalte als Name des Bersta-Artikel
3. Durchführung der Suche nach Artikelnummer wie in `Eingabe & Suche`beschrieben 

Sofern die Suche nur einen Treffer ergeben hat, wird der Preis übernommen. Sofern der Preis in der 7. Spalte mit dem der Suche übereinstimmt, wird nur eine Benachrichtigung angezeigt. Ist der Preis unterschiedlich, wird der alte und der neue angezeigt. 

Manche Bersta-Artikel sind selbst abzuwägen, weil diese zB nur nach `kg` berechnet werden. Es wird hier dann auch der Bruttopreis berechnet - die Mehrwertsteuer wird aus der 8. Spalte genommen. 

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



## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
