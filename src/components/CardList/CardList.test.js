import React from "react";
import CardList from "./CardList";
import { render, screen } from "@testing-library/react";
import { beers } from "../../data/beers";

describe("CardList tests", () => {
  test("renders card element", () => {
    render(<CardList beers={beers} />);
    const cardElement = screen.getAllByTestId("card");
    expect(cardElement.length).toEqual(beers.length);
  });
});
