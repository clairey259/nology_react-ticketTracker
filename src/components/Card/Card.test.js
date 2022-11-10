import React from "react";
import Card from "./Card";
import { shallow } from 'enzyme';
import beers from '../../data/beers';


describe("Card tests", () => {
  let component;
  let testBeers;

  beforeEach(() => {
    testBeers = beers[0];
    component = shallow(<Card recipe={testBeers} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
