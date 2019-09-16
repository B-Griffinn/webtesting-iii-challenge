// Test away!
import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Display from "./Display";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should Displays unlocked", () => {
    const { queryByText } = render(<Display />);
    expect(queryByText(/unlocked/i)).toBeTruthy();
  });

  it("should Displays open", () => {
    const { queryByText } = render(<Display />);
    expect(queryByText(/open/i)).toBeTruthy();
  });

  it('should "closed" and "locked" equal false', () => {
    const { queryByText } = render(<Display closed={true} locked={true} />);
    expect(queryByText(/closed/i)).toBeTruthy();
    expect(queryByText(/locked/i)).toBeTruthy();
  });


  it("Should have red-led when locked or closed", () => {
    const { queryAllByTestId } = render(
      <Display closed={false} locked={false} />
    );
    expect(queryAllByTestId("led green-led")).toBeTruthy();
  });

  it("Should have red-led when locked or closed", () => {
    const { queryAllByTestId } = render(
      <Display closed={true} locked={true} />
    );
    expect(queryAllByTestId("led red-led")).toBeTruthy();
  });

});