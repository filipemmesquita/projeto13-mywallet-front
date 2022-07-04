import styled from 'styled-components';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { useState,useContext } from "react";
import UserContext from "../../contexts";

export default function NewExpense(){
    const [title, setTitle] = useState("");
	const [value, setValue] = useState("");
    const [isDisabled, setDisabled]=useState(false);
    const {header} = useContext(UserContext);
    const navigation=useNavigate();
    function createEntry(event){
        event.preventDefault();
        const submitObject ={title:title,
            value:value,
            type:"expense"}
            setDisabled(true);
        console.log(submitObject);
        const request = axios.post("https://mywallet-mesquita.herokuapp.com/entries", submitObject,header.config);
        request.then(() =>{
            navigation('/entries/');
            }
        );
    }

return(
        <Container>
            <TopWrapper>
                <h2>Nova Saída</h2>
            </TopWrapper>
            <form onSubmit={createEntry}>
                <input type="number" placeholder='Valor' value={value} onChange={e => setValue(e.target.value)} required disabled={isDisabled ? true : false} />
                <input type="text"  placeholder='Descrição' value={title} onChange={e => setTitle(e.target.value)} required disabled={isDisabled ? true : false} />
                <button type="submit">Entrar</button>
            </form>
        </Container>
    );
}
const TopWrapper = styled.div`
width:100%;
display: flex;
justify-content: left;
align-items: center;
height: 31px;
margin:22px 0;
`;
const Container =styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:326px;
margin: 0 auto;
`;