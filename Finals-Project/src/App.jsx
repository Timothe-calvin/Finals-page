import { useEffect, useState } from "react";
import { getProductsList } from "../utils/apis";

const App = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        getProductsList().then((data) => {
            setProductList(data)
        })
    }, []);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {productList.map((item) =>(
            <div key={item.id}>
                <img src={item.image} alt="" height={300} />
                <div>{item.title}</div>
                <p>{item.description}</p>
                <div>${item.price}</div>
            </div>
    ))}
    </div>
  )
}

export default App