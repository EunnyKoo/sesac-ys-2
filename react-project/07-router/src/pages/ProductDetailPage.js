import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ProductDetailPage() {
    const [product, setProduct] = useState();
    const [error, setError] = useState("Loading...");
    const { id } = useParams();
    console.log(id);
    // product/:id/:name 
    // params => { id: value, name: value }

    // ~~~~?id=2&name=koo
    // 쿼리를 가져오고 싶을 땐?
    const [query, setQuery] = useSearchParams();
    console.log(query); // URLSearchParams {size:1}
    console.log(query.get("name")); // koo
    // query => {id: 2}

    // Link 컴포넌트를 이용하지 않고, js 함수 내부에서 페이지를 이동시키는 코드를 작성해야할 때
    const navigator = useNavigate();

    const getProduct = async () => {
        try {
            // 오류가 날 수도 있는 코드를 try 안에 넣는다. 
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if(res.ok){
                const prod = await res.json();
                setProduct(prod);
            } else {
                throw Error("존재하지 않는 상품입니다.");
            }
        } catch(error) {
            console.log(error);
            setError(error.message);
            //try 안에서 오류가 발생하면 catch로 이동함.
        }
    };

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>
            <div>여기는 상품 상세 페이지</div>
            <button onClick={() => navigator(-1)}>목록으로 이동</button>
            <button onClick={() => navigator("/")}>홈으로 이동</button>
            {/* <button onClick={() => setQuery({ name: "eun" })}>setQuery 테스트</button> */}
            {product ? (
                <ul>
                    <li>번호: {product.id}</li>
                    <li>상품명: {product.title}</li>
                </ul>
            ) : (
                <div>{error}</div>
            )}
        </>
    )
}
