import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App tests", () => {
  test("renders navbar and main section is rendered", () => {
    render(<App />);
    const navbarElement = screen.getByTestId("navbar");
    const mainElement = screen.getByTestId("main");
    expect(navbarElement).toBeInTheDocument();
    expect(mainElement).toBeInTheDocument();
  });
});
