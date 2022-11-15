import React from "react";
import SearchBox from "./SearchBox";
import { fireEvent, render, screen } from "@testing-library/react";

describe("SearchBox tests", () => {
  test("search input is rendered", () => {
    render(<SearchBox placeholder="testPlaceHolder"/>);
    const searchboxElement = screen.getByPlaceholderText("testPlaceHolder")
    expect(searchboxElement).toBeInTheDocument()
  });

  test("search input is empty on render", () => {
    render(<SearchBox placeholder="testPlaceHolder"/>);
    const searchboxElement = screen.getByPlaceholderText("testPlaceHolder")
    expect(searchboxElement.value).toBe("")
  });

  test("search input should change", () => {
    render(<SearchBox placeholder="testPlaceHolder"/>);
    const searchboxElement = screen.getByPlaceholderText("testPlaceHolder")
    const testValue = "test"

    fireEvent.change(searchboxElement, { target: { value: testValue } })
    expect(searchboxElement.value).toBe(testValue)
  });

});

