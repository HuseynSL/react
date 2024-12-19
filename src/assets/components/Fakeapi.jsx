import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function Fakeapi() {    
    let [data, setData] = useState([]);
    let [spinner,setSpinner]=useState(true)
    let [name,setName]=useState()
    let [price,setprice]=useState()
  
      async function handlePost(e) {
        e.preventDefault()
          let newProduct={
            name:name
          }
          setData([...data,newProduct])
          await axios.post("https://northwind.vercel.app/api/products",newProduct);
  
      }

      
    function getData() {
        axios.get("https://northwind.vercel.app/api/products")
        .then(res => setData(res.data))
        .finally(()=>{
            setSpinner(false)
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }
    useEffect(() => {
        getData();
    }, []);

    function sortPriceMin() {
        let lowPrice=data.sort((a,b)=>a.unitPrice-b.unitPrice)
        setData([...lowPrice])
        console.log(lowPrice)
    }

    function sortPriceMax() {
        let lowPrice=data.sort((a,b)=>b.unitPrice-a.unitPrice)
        setData([...lowPrice])
        console.log(lowPrice)
    }

   async function deleteItem(id) {
     await  axios.delete("https://northwind.vercel.app/api/products/"+id)
     let filteredProduct=data.filter(product=>product.id!==id);
     setData(filteredProduct)
    }

    

    

    return (
        <div>
        {
            spinner ? (
                <div className="loader"></div>
            ) : (
                <ul>
                    {data.map(elem => (
                        <table key={elem.id}>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{elem.name}</td>
                                    <td style={{ color: elem.discontinued ? "red" : 'black' }}>{elem.unitPrice}</td>
                                    <td style={{ color: elem.unitsInStock > 10 ? "blue" : "black" }}>{elem.unitsInStock}</td>
                                    <td><button onClick={() => deleteItem(elem.id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    ))}
                </ul>
            )
        }
        <button onClick={sortPriceMin}>Ucuzdan bahaya</button>
        <button onClick={sortPriceMax}>Bahadan ucuza</button>
        <Form onSubmit={(e)=>handlePost(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter Product" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Product" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Product" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group> 
  
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    

    </div>
    );
}

export default Fakeapi;
