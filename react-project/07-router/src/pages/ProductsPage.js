import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsPage() {
    const [product, setProduct] = useState(null);

    const getProducts = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const products = await res.json();
        setProduct(products);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div>여기는 상품 페이지 </div>
            {product ? (
                <>
                    {product.map((value) => (
                        <ul key={value.id}>
                            <li>상품번호:{value.id}</li>
                            <li>상품이름:{value.title}</li>
                            <li>상품설명:{value.body}</li>
                            <li>
                                <Link to={`/product/${value.id}`}>상세 보기</Link>
                            </li>
                        </ul>
                    ))}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
