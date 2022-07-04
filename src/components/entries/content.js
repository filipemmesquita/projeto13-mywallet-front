import styled from 'styled-components';

export default function Entry(props){
    return(
        <EntryWrapper>
            <p><span>{props.date.substring(0,5)} </span> {props.title}</p><Value type={props.type} >{Number(props.value).toFixed(2)}</Value>
        </EntryWrapper>
    );
}
const EntryWrapper=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #000000;
margin-bottom: 20px;
span{
    color: #C6C6C6;
}
`;
const Value=styled.p`
color:${props => props.type==="income" ? "#03AC00":"#C70000"}
`