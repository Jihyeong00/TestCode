import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const Button = () => {
  return (
    <button
      onClick={() => console.log("click")}
      onMouseOver={() => console.log("hover")}
    >
      button
    </button>
  );
};

describe("Button Test", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it("fireEvent", () => {
    render(<Button />);
    fireEvent.click(screen.getByRole("button"));
    expect(console.log).not.toHaveBeenCalledWith("hover");
    expect(console.log).toHaveBeenCalledWith("click");
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it("userEvent", async () => {
    const user = userEvent.setup();
    render(<Button />);
    await user.click(screen.getByRole("button"));
    expect(console.log).toHaveBeenCalledWith("hover");
    expect(console.log).toHaveBeenCalledWith("click");
    expect(console.log).toHaveBeenCalledTimes(2);
  });

  it("fireEvent input", () => {
    render(<input type="text" onFocus={() => console.log("focus")} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "helo" },
    });
    expect(screen.getByRole("textbox")).toHaveValue("helo");
    expect(console.log).not.toHaveBeenCalled();
  });

  it("userEvent input", async () => {
    const user = userEvent.setup();
    render(<input type="text" onFocus={() => console.log("focus")} />);
    await user.type(screen.getByRole("textbox"), "helo");
    expect(screen.getByRole("textbox")).toHaveValue("helo");
    expect(console.log).toHaveBeenCalledWith("focus");
  });
});

