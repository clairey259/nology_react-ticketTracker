import React from "react";
import SearchBox from "./SearchBox";
import { shallow } from 'enzyme';
import beers from '../../data/beers';


describe("SearchBox tests", () => {
  let component;
  let testBeers;

  beforeEach(() => {
    testBeers = beers[0];
    component = shallow(<SearchBox />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
