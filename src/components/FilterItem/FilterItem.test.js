import React from "react";
import FilterItem from "./FilterItem";
import { render, screen } from "@testing-library/react";

describe("FilterItem tests", () => {
  test("should display input checkbox", () => {
    render(<FilterItem />);
    const checkboxElement = screen.getByRole("checkbox")
    expect(checkboxElement).toBeInTheDocument()
  });

  test("loads and displays checkbox label", () => {
    render(<FilterItem label="myLabel" />);
    const label = screen.getByText("myLabel")
    expect(label).toBeInTheDocument()
  });

  test("checkbox should be ticked when isTicked = true", () => {
    render(<FilterItem label="myLabel" isTicked={true}/>);
    const checkboxElement = screen.getByRole("checkbox")
    expect(checkboxElement).toBeChecked()
  });

  test("checkbox should be unticked when isTicked = false", () => {
    render(<FilterItem label="myLabel" isTicked={false}/>);
    const checkboxElement = screen.getByRole("checkbox")
    expect(checkboxElement).not.toBeChecked()
  });
});
