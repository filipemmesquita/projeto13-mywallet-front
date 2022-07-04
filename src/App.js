import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { useState } from "react";
import UserContext from "./contexts";
import Login from './components/login';
import SignUp from './components/signup';
import Entries from "./components/entries/entries";
import NewIncome from "./components/newentry/newincome";
import NewExpense from "./components/newentry/newexpense";

export default function App(){
    const [config,setConfig] = useState(null);
    const header={config, setConfig}
    const [info,setInfo]=useState(null);
    const user={info,setInfo}
    return(
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider value={{header,user}}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup/" element={<SignUp />} />
                <Route path="/entries/" element={<Entries />}  />
                <Route path="/newexpense/" element={<NewExpense />}/>
                <Route path="/newincome/" element={<NewIncome />}/>
            </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}