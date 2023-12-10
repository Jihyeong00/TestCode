import {useDetailStore} from "../store/useDetailStore.tsx";
import {useProductStore} from "../store/useProductStore.tsx";

export default function DetailModal() {
    const {product, setProduct} = useProductStore()
    const {isOpen, setIsOpen} = useDetailStore()

    const modalClose = () => {
        setIsOpen(false)
        setProduct(undefined)
    }

    return (
        <>
            {isOpen && product ?
                <>
                    <div role={'back-layout'} onClick={modalClose} className={'back-layout'}
                         style={{
                             cursor:'pointer',
                             position: "fixed",
                             zIndex: 5000,
                             width: '100%',
                             height: '100vh',
                             background: 'rgba(00,00,00,0.5)'
                         }}></div>
                    <section role={'product-info'} className={'product-info'} style={{
                        position: "fixed",
                        zIndex: 5001,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <div className={'product-box'} style={{borderRadius:'10px', padding:'20px', width: '500px', height: '600px', background: 'white'}}>
                            <div className={'product-thumbnail'} style={{overflow:'hidden', borderRadius:'8px'}}>
                                <img src={product.thumbnail} alt={product.title +"의 이미지"} height={300} width={'100%'}/>
                            </div>
                            <div style={{color:'black', display:'flex', flexDirection:'column', gap:'4px'}} className={'product-info-box'}>
                                <h3 data-testid="product-title">
                                    title: {product.title}
                                </h3>
                                <h4>
                                    brand: {product.brand}
                                </h4>
                                <div>
                                    description: {product.description}
                                </div>
                                <div style={{display:'flex', gap:'4px'}}>
                                    category:
                                    <div style={{borderRadius:'30px', background:'gray', width:'fit-content', padding:'4px 8px'}}>
                                        {product.category}
                                    </div>
                                </div>
                                <div>
                                    ${product.price.toLocaleString()}
                                </div>
                                <div>
                                    Rating: {product.rating}
                                </div>
                            </div>
                        </div>
                    </section>
                </> : null
            }
        </>
    )
}