import "./App.css";
import PhoneList from "./pages/phoneList.tsx";
import UseDetailStore from "./store/useDetailStore.tsx";
import UseProductStore from "./store/useProductStore.tsx";
import DetailModal from "./modal/detailModal.tsx";

function App() {
    return (
        <UseDetailStore>
            <UseProductStore>
                <DetailModal/>
                <PhoneList/>
            </UseProductStore>
        </UseDetailStore>
    );
}

export default App;