class AirMaltaHomePage {
  elements = {
    departureAirportField: () => cy.get('.route-selection-origin'),
    departureAirportInput: () => cy.get('input[name="Origin1"]'),
    airportOptions: () => cy.get('.airport-option-container'),
    destinationAirportField: () => cy.get('.route-selection-destination'),
    destinationAirportInput: () => cy.get('input[name="Destination1"]'),
    departureDateInput: () => cy.get('input[name="DepartureDate1"]'),
    destinationDateInput: () => cy.get('input[name="DepartureDate2"]'),
    departureCalender: () => cy.get('.DayPicker-Month').eq(0),
    destinationCalendar: () => cy.get('.DayPicker-Month').eq(1),
    // activeCalendarDates: () => cy.get('[aria-disabled="false"] > .date-picker-cell > .calendar-flight-price'),
    flightPriceInCalendar: () =>
      cy.get('[aria-disabled=false] >> .calendar-flight-price'),
    progressLoader: () => cy.get('.spinner'),
  };

  // cy.get('[aria-label="Thu Dec 15 2022"] > .date-picker-day-cell > .calendar-flight-price')
  getText($el) {
    const texts = Cypress._.map($el, (text) => text.innerText);
    cy.log(`Log ${texts[0]}`);
    return texts[0];
  }

  typeDepartureAirport(airport: string) {
    this.elements.departureAirportField().click();
    this.elements.departureAirportInput().type(airport);
  }

  typeDestinationAirport(airport: string) {
    this.elements.destinationAirportField().click();
    this.elements.destinationAirportInput().type(airport);
  }

  selectDepartureAirport(airport: string) {
    this.elements.departureAirportField().click();
    this.elements.airportOptions().contains(airport).click();
  }

  selectDestinationAirport(airport: string) {
    this.elements.destinationAirportField().click();
    this.elements.airportOptions().contains(airport).click();
  }

  clickDepartureDateField() {
    this.elements.departureDateInput().click();
  }

  clickDestinationDateField() {
    this.elements.destinationDateInput().click();
  }

  waitForLoaderToDisappear() {
    this.elements.progressLoader().should('not.be.visible');
  }

  printFirstAvailableFlightDate() {
    this.waitForLoaderToDisappear();
    this.elements.departureCalender().within(() => {
      this.elements
        .flightPriceInCalendar()
        .first()
        .then(($price) => cy.log($price.text()));
    });
  }
}

export default new AirMaltaHomePage();
