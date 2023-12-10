import {render, screen} from "@testing-library/react";

render(
    <div>
        <h4>Zero의 테스트 React 테스트 코드</h4>
        <div>
            <button>클릭!</button>
        </div>
    </div>
);

test("해당 페이지가 렌더링이 되었는지 테스트 합니다.", async () => {
    expect(await screen.findByRole("button")).toBeInTheDocument();
    expect(await screen.queryByText(/Zero의 테스트 React 테스트 코드/)).toBeInTheDocument();
});