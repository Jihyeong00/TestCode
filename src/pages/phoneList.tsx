import {productsMock} from "../__test__/products.mock.ts";
import {useDetailStore} from "../store/useDetailStore.tsx";
import {IProduct, useProductStore} from "../store/useProductStore.tsx";

export default function PhoneList() {
    const {products} = productsMock
    const {setIsOpen} = useDetailStore()
    const {setProduct} = useProductStore()

    const onClick = (product: IProduct) => {
        setProduct(product)
        setIsOpen(true)
    }

    return (
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: '16px', justifyContent:'center', padding: '60px 0'}}>
            {products.map(product =>
                <div style={{cursor:'pointer', width: '200px', background: '#171717', padding: '20px', borderRadius: '12px'}}
                     key={product.id}>
                    <div onClick={() => onClick(product)} className={'img-box'}>
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