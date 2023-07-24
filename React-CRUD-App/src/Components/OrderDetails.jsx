import React, { useEffect, useState } from 'react';
import { makeStyles, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import { deleteOrder,getallOrders } from '../service/api';


const useStyles = makeStyles({
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

const OrderDetails = () => {

const classes = useStyles();
const [order, setOrders] = useState([]);
useEffect(() => {
    getOrders();
}, [])

const getOrders = async () =>{
    const response = await getallOrders();
    console.log(response);
    setOrders(response.data);
}

const deleteData = async (id) => {
    await deleteOrder(id);
    getOrders();
}
return (
<Table className={classes.table}>
    <TableHead>
            <TableRow className={classes.thead}>
                <TableCell>Order ID</TableCell>
                <TableCell>Product ID</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell></TableCell>
            </TableRow>
    </TableHead>
    <TableBody>
            {order.map((data) => (
             <TableRow className={classes.throw} key={data.id}>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.productid}</TableCell>
                    <TableCell>{data.userid}</TableCell>
                    <TableCell>
                    <Button variant="contained" color="secondary" style={{margin: '0px 20px'}} onClick={() => deleteData(data.id)}>Remove From Cart</Button>
                    </TableCell>
            </TableRow>
                    ))}
    </TableBody>
            </Table>
    )
}

export default OrderDetails;