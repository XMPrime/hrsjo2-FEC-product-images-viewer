import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
// import { GlobalStyle } from "./styles/App.styles.js";
import ProductHeader from './components/ProductHeader.jsx';
import ProductImagesViewer from './components/ProductImagesViewer.jsx';


const axios = require('axios');

const App = () => {
  const [productData, setProductData] = useState({
    id: 0,
    name: 'loading',
    brand: 'loading',
    images: ['https://target.scene7.com/is/image/Target/GUEST_f7dfce8b-234e-4343-9f30-5d5c0da5230c?wid=1389&hei=1389&fmt=webp',
    'https://target.scene7.com/is/image/Target/GUEST_ef54301f-9840-4295-bc4d-384e61b9b211?wid=1389&hei=1389&fmt=webp',
    'https://target.scene7.com/is/image/Target/GUEST_44f711ee-f5f5-4fa6-849d-abe0cbd32463?wid=1389&hei=1389&fmt=webp',
    'https://target.scene7.com/is/image/Target/GUEST_a8929dc9-b0b7-4828-8092-5b6e10d73a53?wid=1389&hei=1389&fmt=webp'],
    reg_price: 49.49,
    discount_price: 44,
  });

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    axios.get('/api/products/0')
      .then(response => {
        setProductData(response.data[0]);
      });
  }

  return (
    <div>
      {/* <GlobalStyle /> */}
      <ProductHeader productData={productData} />
      <ProductImagesViewer productData={productData} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));