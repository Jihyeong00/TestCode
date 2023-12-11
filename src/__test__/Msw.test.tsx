import {setupServer} from "msw/node";
import {http, HttpResponse} from "msw";
import {productMock, productsMock} from "./products.mock.ts";
import {fireEvent, render} from "@testing-library/react";
import UseProductStore from "../store/useProductStore.tsx";
import DetailModal from "../modal/detailModal.tsx";
import PhoneList from "../pages/phoneList.tsx";
import UseDetailStore from "../store/useDetailStore.tsx";

const server = setupServer(...[
        http.get('/posts', () => {
            return HttpResponse.json(productsMock)
        }),
        http.get('/post/:id', ({params}) => {
            return HttpResponse.json({...productMock, id: params.id})
        })
    ]
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('loads and displays greeting', async () => {
    server.use()

    const util = render(
        <UseDetailStore>
            <UseProductStore>
                <DetailModal/>
                <PhoneList fetchUrl={'/posts'}/>
            </UseProductStore>
        </UseDetailStore>
    )
    const imgBox = await util.findByAltText("iPhone 9소개사진");
    expect(imgBox).toBeInTheDocument()

    // 이미지 박스를 클릭한다.
    fireEvent.click(imgBox);

    // 상세 모달이 열린다.
    const detailBox = await util.findByRole('product-info')
    expect(detailBox).toBeInTheDocument()

    // 상세 모달의 정보가 누른 이미지와 동일 한지 확인한다.
    expect(util.getByTestId('product-title').innerHTML).toBe('title: iPhone 9')

    // 여백을 다시 누른다.
    fireEvent.click(await util.findByRole('back-layout'))

    // 여백을 누름으로서 상세모달은 보이지 않는다.
    expect(detailBox).not.toBeInTheDocument()
})
