import React, { useState,useEffect } from 'react';
import { InputLabel, Input, Box, FormGroup, Button,Container} from '@material-ui/core';
import { getallUsers } from '../service/api';
import { Link } from 'react-router-dom';

const initialValue = {
    username: "",
    password:"",

  };
const Home = () => {
    const [username, setUserName] = useState(initialValue);
    const[password, setPassword]=useState(initialValue);
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () =>{
        const response = await getallUsers();
        console.log(response);
        setUser(response.data);
    }
  
    const validateForm=()=>{
        return username.length >0 && password.length>0;
    }
    
    return (
      
      <Container maxWidth="sm">
        <h1>Login Here</h1>
            <Box my={5}>
              <FormGroup >
              <InputLabel>Username</InputLabel>
                <Input
                type="text"
                name="username"
                id="username"
                onChange={(e)=>setUserName(e.target.value)}
                >
                </Input>
              </FormGroup>
              <FormGroup >
                <InputLabel>Password</InputLabel>
                <Input
                type="text"
                id="password"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                />
             </FormGroup>
              <Button className="btn btn-sm btn-light" disabled={!validateForm()} component={Link} to='/all'>
              Submit
              </Button>
            </Box>
            </Container>
    )
}

export default Home;