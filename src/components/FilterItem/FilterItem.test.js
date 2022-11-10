import React from "react";
import FilterItem from "./FilterItem";
import { shallow } from 'enzyme';
import beers from '../../data/beers';


describe("FilterItem tests", () => {
  let component;
  let testBeers;

  beforeEach(() => {
    testBeers = beers[0];
    component = shallow(<FilterItem />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
