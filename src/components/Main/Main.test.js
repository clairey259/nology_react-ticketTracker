import React from "react";
import Main from "./Main";
import { shallow } from 'enzyme';
import beers from '../../data/beers';


describe("Main tests", () => {
  let component;
  let testBeers;

  beforeEach(() => {
    testBeers = beers[0];
    component = shallow(<Main />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
