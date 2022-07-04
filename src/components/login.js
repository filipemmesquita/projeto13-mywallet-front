import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate  } from "react-router-dom";
import { useState,useContext } from "react";
import UserContext from "../contexts";

export default function Login(){
    const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
    const [isDisabled, setDisabled]=useState(false);
    const {header, user} = useContext(UserContext);
    const navigation=useNavigate();
    function logIn(event){
        event.preventDefault();
        const submitObject ={email:email,
            password:senha}
            setDisabled(true);
        console.log(submitObject);
        const request = axios.post("http://localhost:5000/login", submitObject);
        request.then(response =>{
            console.log(response.data)
            const infoObject={name:response.data.name}
            user.setInfo(infoObject);
            header.setConfig({
                headers: {
                    "Authorization": `Bearer ${response.data.token}`
                }
                });
 
            navigation('/entries/');
            }
        );


    }
    return(
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={logIn}>
                <input type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} required disabled={isDisabled ? true : false} />
                <input type="password"  placeholder='senha' value={senha} onChange={e => setSenha(e.target.value)} required disabled={isDisabled ? true : false} />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/signup/">Não possui uma conta? cadastre-se!</Link>
        </Container>
    );
}
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top:100px;
a{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`