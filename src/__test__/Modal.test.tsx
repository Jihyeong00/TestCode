import {fireEvent, render, screen} from "@testing-library/react";
import UseDetailStore from "../store/useDetailStore.tsx";
import UseProductStore from "../store/useProductStore.tsx";
import DetailModal from "../modal/detailModal.tsx";
import PhoneList from "../pages/phoneList.tsx";

render(<>
    <UseDetailStore>
        <UseProductStore>
            <DetailModal/>
            <PhoneList/>
        </UseProductStore>
    </UseDetailStore>
</>)

test("이미지를 클릭하면 모달창이 열리고 여백을 클릭하면 다시 닫힌다.", async () => {
    const imgBox = await screen.findByAltText("iPhone 9소개사진");
    expect(imgBox).toBeInTheDocument()

    // 이미지 박스를 클릭한다.
    fireEvent.click(imgBox);

    // 상세 모달이 열린다.
    const detailBox = await screen.findByRole('product-info')
    expect(detailBox).toBeInTheDocument()

    // 상세 모달의 정보가 누른 이미지와 동일 한지 확인한다.
    expect(screen.getByTestId('product-title').innerHTML).toBe('title: iPhone 9')

    // 여백을 다시 누른다.
    fireEvent.click(await screen.findByRole('back-layout'))

    // 여백을 누름으로서 상세모달은 보이지 않는다.
    expect(detailBox).not.toBeInTheDocument()
});