# NgrxWorkshop

This clean angular cli repository is going to be our starting point for our angular NGRX workshop.
For each new step or angular ngrx feature to discuss, we are going to to have a branch:

1 - ngrx packages installation, initial set up

2 - creating first ngrx simple flow [store, state, actions, reducers, selects]

3 - creating a secong flow with effects [store, state actions, recducers, effects, selects]

4 - small walk through of ngrx dev tools

5 - example of unit testing our store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## NGRX packages installation and initial set up

branch name: `feature/installation-setup`

In this branch we are going to install and setup NGRX.

1 - install NGRX [schematics](https://ngrx.io/guide/schematics): `npm install @ngrx/schematics --save-dev`

2 - install ngrx packages: `npm install @ngrx/{store,effects,entity,store-devtools} --save`

3 - install router store: `npm install @ngrx/router-store --save`

4 - generate the intial configuration with the ngrx schematics: `ng generate @ngrx/schematics:store State --root --module app.module.ts`

5 - generate inital configuration for effects with ngrx schematics: `ng generate @ngrx/schematics:effect App --root --module app.module.ts`

6 - change folder structure to work with a store folder containing all store related functionality

7 - additional changes to ngrx schematics set up and add router state and configuration

## Creating our first NGRX simple flow [store, state, actions, reducers, selects]

1 - let's simulate that we have the logged user info save in our state

2 - creating our user state

3 - creating our user actions

4 - creating our user reducers

5 - creating our user select

6 - hooking everything together

6 - let's change our home page to you our user information

## Creating our second NGRX simple flow [store, state, actions, reducers, effects, selects]

1 - let's create a service to get Github users info and a model to bind the reponse

2 - creating our github state

3 - creating our github actions

4 - creating our github reducers

5 - creating our github effects

6 - creating our github selects

7 - hooking everything together (container component, presentation component, routing, using github users ngrx flow)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
