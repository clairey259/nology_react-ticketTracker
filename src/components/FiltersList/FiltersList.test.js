import React from "react";
import FilterList from "./FilterList";
import { shallow } from 'enzyme';
import beers from '../../data/beers';


describe("FilterList tests", () => {
  let component;
  let testBeers;

  beforeEach(() => {
    testBeers = beers[0];
    component = shallow(<FilterList />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
