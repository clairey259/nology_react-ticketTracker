import React from "react";
import Main from "./Main";
import { render, screen } from "@testing-library/react";
import beers from "../../data/beers";

describe("Main tests", () => {
  test("renders cardlist", () => {
    render(<Main />);
    const cardListEl = screen.getAllByTestId("cardList");
    expect(cardListEl).toBeInTheDocument();
  });
});
