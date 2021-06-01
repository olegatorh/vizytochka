import './App.css';
import {Route, Switch} from "react-router-dom"
import MainPage from "./components/MainPage/MainPage";
import SecondPage from "./components/SecondPage/SecondPage";

function App() {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={MainPage}/>
                <Route  path={'/SecondPage'} component={SecondPage}/>
            </Switch>
        </>
    );
}

export default App;
