import React from "react";
import FiltersList from "./FiltersList";
import { render, screen } from "@testing-library/react";

describe("FiltersList tests", () => {
  test("displays three FilterItems", () => {
    render(<FiltersList />);
    const filtersListArr = screen.queryAllByTestId("filterItem");
    expect(filtersListArr).toHaveLength(3);
  });

  test("displays three FilterItems", () => {
    render(<FiltersList />);
    const filtersListElement = screen.queryByTestId("filtersList");
    expect(filtersListElement.childElementCount).toBe(3);
  });

});
