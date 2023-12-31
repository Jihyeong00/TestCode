import {useDetailStore} from "../store/useDetailStore.tsx";
import {IProduct, useProductStore} from "../store/useProductStore.tsx";
import {useEffect, useState} from "react";

const fetcher = async (fetchUrl: string) => {
    const res = await fetch(fetchUrl)
    if (res.ok) {
        return res.json()
    } else {
        throw new Error("Error")
    }
}
export default function PhoneList({fetchUrl}: { fetchUrl: string }) {
    const [products, setProducts] = useState<IProduct[]>([])
    const {setIsOpen} = useDetailStore()
    const {setProduct} = useProductStore()
    const onClick = (product: IProduct) => {
        setProduct(product)
        setIsOpen(true)
    }

    useEffect(()=>{
        fetcher(fetchUrl).then(res => setProducts(res))
    },[fetchUrl])

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            gap: '16px',
            justifyContent: 'center',
            padding: '60px 0'
        }}>
            {products.map(product =>
                <div style={{
                    cursor: 'pointer',
                    width: '200px',
                    background: '#171717',
                    padding: '20px',
                    borderRadius: '12px'
                }}
                     key={product.id}>
                    <div data-role={"img-box"} onClick={() => onClick(product)} className={'img-box'}>
                        <img src={product.thumbnail} alt={product.title + "소개사진"}
                             width={200} height={150}/>
                    </div>
                    <div style={{textAlign: 'left'}}>
                        {product.title}
                        <div>price: {product.price.toLocaleString()}$</div>
                        <div>{product.brand}</div>
                    </div>
                </div>
            )}
        </div>
    )
}