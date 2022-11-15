import React from "react";
import NavBar from "./NavBar";
import { render, screen } from "@testing-library/react";

describe("NavBar tests", () => {
  test("displays search box and filters list", () => {
    render(<NavBar />);
    const searchBoxElement = screen.getByTestId("searchBox");
    const filtersListElement = screen.getByTestId("filtersList");
    expect(searchBoxElement && filtersListElement).toBeInTheDocument();
  });
});
