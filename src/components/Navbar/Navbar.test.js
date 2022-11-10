import React from "react";
import NavBar from "./NavBar";
import { shallow } from 'enzyme';
import beers from '../../data/beers';


describe("NavBar tests", () => {
  let component;
  let testBeers;

  beforeEach(() => {
    testBeers = beers[0];
    component = shallow(<NavBar />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
