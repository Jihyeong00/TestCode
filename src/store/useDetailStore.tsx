import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export const DetailStore = createContext<{
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
    isOpen: false,
    setIsOpen: ()=>{},
});

export const useDetailStore = () => useContext(DetailStore);

const useDetailStoreProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const detailContextValue = {
        isOpen,
        setIsOpen,
    };

    return (
        <DetailStore.Provider value={detailContextValue}>
            {children}
        </DetailStore.Provider>
    );
};

export default useDetailStoreProvider;
