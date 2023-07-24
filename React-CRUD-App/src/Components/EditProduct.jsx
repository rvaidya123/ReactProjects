import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { editProduct, getallProducts } from '../service/api';
import { useHistory, useParams } from 'react-router-dom';

const initialValue = {
    name: "",
    price: "",
    stock: "",
    shortDesc: "",
    description: ""
  };

const EditProduct = () => {

    const [products, setProduct] = useState(initialValue);
    const {name, price, stock, shortDesc,description} = products;

    const { id } = useParams();

    useEffect(() => {
        loadProductData();
    },[]);

    const loadProductData = async () =>{
        const response = await getallProducts(id);
        setProduct(response.data);
    }

    const history = useHistory();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setProduct({...products, [e.target.name]: e.target.value});
        console.log(products);
    }

    const editProductDetails = async () =>{
       await editProduct(id,products);
       history.push('/allProduct');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Update Product Details</Typography>
            <FormGroup>
            <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel>Price</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="price" value={price} />
                </FormControl>
                <FormControl>
                    <InputLabel>Stock</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="stock" value={stock} />
                </FormControl>
                <FormControl>
                    <InputLabel>Short Desc</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="shortDesc" value={shortDesc} />
                </FormControl>
                <FormControl>
                    <InputLabel>Description</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="description" value={description} />
                </FormControl>
                <Box my={3}>
                    <Button variant="contained" onClick={() => editProductDetails() } color="primary" align="center">Update Product</Button>
                    <Button onClick={()=> history.push("/allProduct")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default EditProduct;