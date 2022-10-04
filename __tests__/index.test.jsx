import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { server } from "../mocks/server.js";
import TripsData from "../data/trips.json";
import { ChakraProvider } from "@chakra-ui/react";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Page", () => {
  // Establish API mocking before all tests.
  beforeAll(() => server.listen());
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers());
  // Clean up after the tests are finished.
  afterAll(() => server.close());

  it("renders all the trip tiles", async () => {
    render(
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    );

    for (let index = 0; index < TripsData.trips.length; index++) {
      const trip = TripsData.trips[index];

      expect(await screen.findByText(trip.name)).toBeInTheDocument();

      expect(
        await screen.findByText(
          `${trip.numberOfCountriesCovered} ${
            trip.numberOfCountriesCovered > 1 ? "Countries" : "Country"
          }, ${trip.numberOfDays} ${trip.numberOfDays > 1 ? "days" : "day"}`
        )
      ).toBeInTheDocument();

      // TODO check for rating and emissions as well
    }
  });
});
