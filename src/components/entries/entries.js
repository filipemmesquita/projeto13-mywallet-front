import styled from 'styled-components';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { useState,useContext,useEffect } from "react";
import UserContext from "../../contexts";
import Entry from './content';


export default function Entries(){
    const { header, user } =useContext(UserContext);
    const [totalValue, setTotalValue]=useState(null);
    console.log(user)
    const [entryList,setEntryList]=useState([]);
    const navigation=useNavigate();
    function requestEntryList(){
        const requisition=axios.get("http://localhost:5000/entries", header.config)
        requisition.then(response=>{
            setEntryList(response.data)
            let sum=0;
            response.data.forEach(entry=>entry.type==="income"?sum=Number(sum)+Number(entry.value):sum=Number(sum)-Number(entry.value))
            setTotalValue(sum)
        });
        requisition.catch(error=>{
            alert("Ocorreu um erro")
            console.log(error.data)
        });
    }
    useEffect(requestEntryList, []);

    function logOut(){
        const requisition=axios.delete("http://localhost:5000/logout", header.config);
        requisition.then(response=>{
            navigation('/');
        });
        requisition.catch(error=>{
            alert("Ocorreu um erro")
            console.log(error.data)
        });
    }

    return(
        <Container>
            <TopWrapper>
                <h2>Olá, {user.info.name}</h2><LogOut onClick={(logOut)}><ion-icon name="log-out-outline"></ion-icon></LogOut>
            </TopWrapper>
            <ContentBox>
                {entryList.length>0 ?
                            <>
                                <ListWrapper>
                                    {entryList.map(entry=>
                                    <Entry key={entry._id} 
                                    id={entry.id} 
                                    value={entry.value} 
                                    title={entry.title}
                                    type={entry.type}
                                    date={entry.date}
                                     />
                                     )}
                                </ListWrapper>
                                <SaldoWrapper endValue={totalValue}><p>Saldo:</p> <p><span>{totalValue}</span></p></SaldoWrapper>
                            </>

                        :
                            <ContentMessage><p>Não há registros de<br /> entrada ou saída</p></ContentMessage>
                }
            </ContentBox>
            <BottomWrapper>
                <NewEntry onClick={(event) =>{navigation('/newincome/');}}><ion-icon name="add-circle-outline"></ion-icon><h3>Nova<br /> entrada</h3></NewEntry>
                <NewEntry onClick={(event) =>{navigation('/newexpense/');}}><ion-icon name="remove-circle-outline"></ion-icon><h3>Nova<br /> saída</h3></NewEntry>
            </BottomWrapper>
        </Container>
    );
};
const SaldoWrapper=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
span{
    color:${props => props.endValue>=0 ? "#03AC00":"#C70000"}
}
`;
const ListWrapper=styled.div`
width:100%;
`;
const ContentMessage=styled.div`
width:100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
text-align: center;

color: #868686;
`;
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
display: flex;
justify-content: space-between;
flex-direction: column;
padding: 12px;
box-sizing: border-box;

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