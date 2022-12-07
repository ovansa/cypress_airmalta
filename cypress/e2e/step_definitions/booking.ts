import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/HomePage';

Given('The Air Malta booking website is opened', () => {
  cy.visit('');
});

When('I select the departing airport', () => {
  homePage.selectDepartureAirport('Vienna International');
});

When('I select the destination airport', () => {
  homePage.selectDestinationAirport('Malta International Airport');
});

When('I click on departure date', () => {
  homePage.clickDepartureDateField();
});

Then(
  'I should print the first available flight price from Vienna International to Malta International Airport',
  () => {
    homePage.printFirstAvailableFlightDate();
  }
);
