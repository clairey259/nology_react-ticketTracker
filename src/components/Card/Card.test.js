import React from "react";
import Card from "./Card";
import { render, screen } from "@testing-library/react";
import beers from '../../data/beers'

xdescribe("Card tests", () => {
  test("renders image", () => {
    render(<Card />);
    const cardImg = screen.getByRole
    expect(CardElement).toBeInTheDocument()
  });

    

  test("search input is empty on render", () => {
    render(<Card placeholder="testPlaceHolder"/>);
    const CardElement = screen.getByPlaceholderText("testPlaceHolder")
    expect(CardElement.value).toBe("")
  });
});

