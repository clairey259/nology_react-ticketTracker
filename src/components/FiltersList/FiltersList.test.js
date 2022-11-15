import React from "react";
import FiltersList from "./FiltersList";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import beers from "../../data/beers";

describe("FiltersList tests", () => {
  test("displays three FilterItems", () => {
    render(<FiltersList />);
    const filtersListArr = screen.queryAllByTestId('filterItem')
    expect(filtersListArr).toHaveLength(3)

  });

});
