import {fireEvent, render, screen} from "@testing-library/react";
import Count from "../components/count.tsx";

render(<Count/>)

test("Renders main page correctly", async () => {
    const clickButton = await screen.findByRole("button");
    expect(clickButton.innerHTML).toBe("click me!")
    expect(await screen.queryByText("0번 눌러졌습니다.")).toBeInTheDocument()

    fireEvent.click(clickButton);
    fireEvent.click(clickButton);
    fireEvent.click(clickButton);

    expect(await screen.queryByText("3번 눌러졌습니다.")).toBeInTheDocument()
});