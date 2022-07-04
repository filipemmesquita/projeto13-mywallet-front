import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate  } from "react-router-dom";
import { useState,useContext,useEffect } from "react";
import UserContext from "../../contexts";

export default function Entries(){
    const { header, user } =useContext(UserContext);
    console.log(user)
    const [entryList,setEntryList]=useState([])
    const navigation=useNavigate();
    function requestEntryList(){
        const requisition=axios.get("http://localhost:5000/entries", header.config)
        requisition.then(response=>{
            setEntryList(response.data)
        });
        requisition.catch(error=>{
            alert("algo deu ruim")
            console.log(error.data)
        });
    }
    useEffect(requestEntryList, []);

    return(
        <Container>
            <TopWrapper>
                <h2>Olá, {user.info.name}</h2><LogOut><ion-icon name="log-out-outline"></ion-icon></LogOut>
            </TopWrapper>
            <ContentBox>
                {entryList.length>0 ?
                            <p>há registros de entrada ou saída</p>
                        :
                            <p>Não há registros de entrada ou saída</p>
                }
            </ContentBox>
            <BottomWrapper>
                <NewEntry onClick={(event) =>{navigation('/newincome/');}}><ion-icon name="add-circle-outline"></ion-icon><h3>Nova<br /> entrada</h3></NewEntry>
                <NewEntry onClick={(event) =>{navigation('/newexpense/');}}><ion-icon name="remove-circle-outline"></ion-icon><h3>Nova<br /> saída</h3></NewEntry>
            </BottomWrapper>
        </Container>
    );
};
const TopWrapper = styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
height: 31px;
margin:22px 0;
`;
const BottomWrapper=styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
margin:13px 0;
`;
const Container =styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:326px;
margin: 0 auto;
`;
const ContentBox = styled.div`
width: 326px;
height: 446px;
background: #FFFFFF;
border-radius: 5px;
`;
const NewEntry = styled.button`
width:155px;
height:114px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 10px;
box-sizing: border-box;
ion-icon{
    font-size:30px;
}
h3{
    font-size:17px;
    text-align: left;
}
`;
const LogOut= styled.button`
width:24px;
background: none;
font-size: 30px;
margin:0;
`