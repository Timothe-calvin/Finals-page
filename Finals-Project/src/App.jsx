import { getProductsList } from '../utils/apis';
import { useEffect,useState } from 'react';
import navBar from './Commands/appBar';

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  padding:'16px',
  margin: '16px',
  maxWidth: '300px',
  backgroundColor:'#fff',
  minHeight:'300px',
 
};


const App = () => {
const [productList, setProductList] = useState([])

useEffect(() => {
  getProductsList().then((data) => {
    setProductList(data)
  })
}, []);
  return (
<>
<div style={{display:'flex', flexwrap:'wrap'}}>
  
  {productList.map((item) => (

<div style={cardStyle}>
  <img src={item.image} alt="" width={300} />
  <div key={item.id} >{item.title} </div>
  <div> {item.price}</div>
  <p>{item.description}</p>
</div>
  ))}
</div>

<navBar />

</> 
  
  )};

 export default App