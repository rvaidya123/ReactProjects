import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button, DialogTitle, Select, colors } from '@material-ui/core';
import { deleteProduct ,getallProducts,getallUsers } from '../service/api';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
    },
    thead:{
        '& > *':{
            background: '#000000',
            color:'#FFFFFF',
            fontSize: '16px'
        }
    },
    trow:{
        '& > *':{
            fontSize: '16px'
        }
    }
})
const AllProducts = () => {
    const classes = useStyle();
    const [user, setUser] = useState([]);
    const [selectedUser, setselectedUser] = useState('');
    const [selectedProduct, setselectedProduct] = useState('');
    const [order, setOrders] = useState('');
    const [products, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
        getUsers();
    }, [])

    const getProducts = async () =>{
        const response = await getallProducts();
        console.log(response);
        setProduct(response.data);
    }

    const deleteData = async (id) => {
        await deleteProduct(id);
        getProducts();
    }

    const getUsers = async () =>{
        const response = await getallUsers();
        console.log(response);
        setUser(response.data);
    }
    const handleOrder = async ()=>{
        try{
            if(!selectedUser && !selectedProduct){
                console.error('User and Product not selected.');
                return;
            }
            // const {id} = products;
            const orderData={userid:selectedUser,productid:selectedProduct};
            const response=await axios.post('http://127.0.0.1:3003/order',orderData);
            const newOrder=response.data;
            setOrders([...order,newOrder]);
            console.log(newOrder);
        }
        catch(error)
        {
            console.error('Error placing order:',error);
        }
    }


    return (
        <Table className={classes.table}>
            <Select 
            id="user"
            name="user"
            value={selectedUser}
            onChange={(e)=>setselectedUser(e.target.value)}
            >
                <option>Select User</option>
                {
                user.map(data=><option key={data.id} value={data.id}>
                    {data.name}
                </option>)}
            </Select>
            <Select 
            id="product"
            name="product"
            value={selectedProduct}
            onChange={(e)=>setselectedProduct(e.target.value)}>
                <option>Select Product</option>
                {
                products.map(data=><option key={data.id} value={data.id}>
                    {data.name}
                </option>)}</Select> 
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell>Short Desc</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                products.map((data) => (
                    <TableRow className={classes.trow}  key={data.id} >
                        <TableCell value={data.id}>{data.id}</TableCell>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.price}</TableCell>
                        <TableCell>{data.stock}</TableCell>
                        <TableCell>{data.shortDesc}</TableCell>
                        <TableCell>{data.description}</TableCell>
                        <TableCell>  
                            <Button variant="contained" color="primary" style={{margin: '0px 20px'}} component={Link} to={`/editProduct/${data.id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" style={{margin: '0px 20px'}} onClick={() => deleteData(data.id)}>Remove</Button>
                            <Button variant="contained" color="Black" style={{margin: '0px 20px'}} onClick={()=>handleOrder(data.id)} component={Link} to='/allorder'>Order</Button>
                        </TableCell>
                    </TableRow>
                    
                ))
            }
            </TableBody>
        </Table>
    )
}

export default AllProducts;
