import React from "react";
import CardList from "./CardList";
import { shallow } from 'enzyme';
import beers from '../../data/beers';


describe("CardList tests", () => {
  let component;
  let testBeers;

  beforeEach(() => {
    testBeers = beers[0];
    component = shallow(<CardList />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
