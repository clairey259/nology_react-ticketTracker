import React from "react";
import CardList from "./CardList";
import { render, screen } from "@testing-library/react";
import beers from "../../data/beers";

xdescribe("CardList tests", () => {
  test("renders card element", () => {
    render(<CardList />);
    const cardEl = screen.getAllByTestId("card");
    expect(cardEl).toBeInTheDocument();
  });
});
