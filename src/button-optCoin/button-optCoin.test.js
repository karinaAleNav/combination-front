import React from "react";
import { shallow } from "enzyme";
import ButtonOptCoin from "./button-optCoin";

describe("ButtonOptCoin", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ButtonOptCoin />);
    expect(wrapper).toMatchSnapshot();
  });
});
