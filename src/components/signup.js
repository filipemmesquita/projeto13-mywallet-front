import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate  } from "react-router-dom";
import { useState } from "react";

export default function SignUp(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [confirmSenha, setConfirmSenha] = useState("");
    const [isDisabled, setDisabled]=useState(false);
    const navigation=useNavigate();

    function signUp(event){
        event.preventDefault();
        if(senha===confirmSenha){
            const submitObject ={email:email,
                name:nome,
                password:senha}
                setDisabled(true);
            const request = axios.post("http://localhost:5000/signup", submitObject);
            request.then(
                navigation('/')
            );
            request.catch(response =>{
                alert("Não foi possível concluir seu cadastro!");
                setDisabled(false);
                }
            );
        }
    }

        

return(
    <Container>
        <h1>MyWallet</h1>
        <form onSubmit={signUp}>
            <input type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} required disabled={isDisabled ? true : false} />
            <input type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} required disabled={isDisabled ? true : false} />
            <input type="password"  placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} required disabled={isDisabled ? true : false} />
            <input type="Password" placeholder='Confirme a senha' value={confirmSenha} onChange={e => setConfirmSenha(e.target.value)} required disabled={isDisabled ? true : false} />
            
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
margin-top:150px;
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