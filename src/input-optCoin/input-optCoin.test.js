import React from "react";
import { shallow } from "enzyme";
import InputOptCoin from "./input-optCoin";

describe("InputOptCoin", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<InputOptCoin />);
    expect(wrapper).toMatchSnapshot();
  });
});
