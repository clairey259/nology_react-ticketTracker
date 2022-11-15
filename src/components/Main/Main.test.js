import React from "react";
import Main from "./Main";
import { render, screen } from "@testing-library/react";
import { beers } from "../../data/beers";

describe("Main tests", () => {
  test("renders cardlist", () => {
    render(<Main beers={beers} />);
    const cardListElement = screen.getByTestId("cardList");
    expect(cardListElement).toBeInTheDocument();
  });
});
