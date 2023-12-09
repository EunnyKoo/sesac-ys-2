import { useEffect, useState } from "react";

export default function ProductPhotoPage() {
    const [product, setProduct] = useState(null);

    const getProducts = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const products = await res.json();
        setProduct(products);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div>여기는 상품 사진 페이지 </div>
            {product ? (
                <>
                    {product.map((value) => (
                        <ul key={value.id}>
                            <li>상품번호:{value.id}</li>
                            <li>상품이름:{value.title}</li>
                            <img src={value.thumbnailUrl}/>
                        </ul>
                    ))}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
