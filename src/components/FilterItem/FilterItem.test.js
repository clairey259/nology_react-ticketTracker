import React from "react";
import FilterItem from "./FilterItem";
import { render, screen } from "@testing-library/react";

describe("FilterItem tests", () => {
  test("should display input checkbox", () => {
    render(<FilterItem />);
    const checkboxElement = screen.getByRole("checkbox", { type: /checkbox/i })
    expect(checkboxElement).toBeInTheDocument()
  });

  test("loads and displays checkbox label", () => {
    render(<FilterItem label="myLabel" />);
    const label = screen.getByText("myLabel")
    expect(label).toBeInTheDocument()
  });


});
