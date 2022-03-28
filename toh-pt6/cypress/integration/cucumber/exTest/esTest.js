import {Given, And, Then} from "cypress-cucumber-preprocessor/steps";
import { createYield } from "typescript";

Given('I visit exTest site', () => {
  cy.visit('https://localhost:4200')
})

Given('I click Heroes Link', () => {
  cy.contains('HeroesLink').click();
})

Given('I add new Hero with name {string}', (heroName) => {
  cy.get('input').type(heroName);
  cy.get('app-heroes > div > button').click();
})
