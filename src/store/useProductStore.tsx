import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

export interface IProduct {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": string[]
}

interface IProductContext {
    product?: IProduct;
    setProduct: Dispatch<SetStateAction<IProduct | undefined>>;
}

const ProductStore = createContext<IProductContext>({
    product: undefined,
    setProduct: () => {
    },
});

export const useProductStore = () => useContext(ProductStore)

const useDetailStoreProvider = ({children}: { children: ReactNode }) => {
    const [product, setProduct] = useState<IProduct | undefined>(undefined);

    const productContextValue: IProductContext = {
        product,
        setProduct,
    };

    return (
        <ProductStore.Provider value={productContextValue}>
            {children}
        </ProductStore.Provider>
    );
};

export default useDetailStoreProvider;
