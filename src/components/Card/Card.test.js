import React from "react";
import Card from "./Card";
import { render, screen } from "@testing-library/react";

describe("Card tests", () => {
    const beer = {
      name: "beer",
      image_url: "url",
      tagline: "tagline",
    };  
    
    test("renders image", () => {
    render(<Card beer={beer}/>);
    const cardImg = screen.getByRole("img");
    expect(cardImg).toBeInTheDocument();
  });

  test("renders url", () => {
    render(<Card beer={beer}/>);
    const cardImg = screen.getByRole("img");
    expect(cardImg.src).toContain("url");
  });

  test("renders name", () => {
    render(<Card beer={beer}/>);
    const cardName = screen.getByText("beer");
    expect(cardName).toBeInTheDocument();
  });

  test("renders tagline", () => {
    render(<Card beer={beer}/>);
    const cardTagline = screen.getByText("tagline");
    expect(cardTagline).toBeInTheDocument();
  });
});
