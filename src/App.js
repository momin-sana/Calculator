import "./App.css";
import { ContextProvider } from "./Calculator/ContextProvider";
import Calculator from "./Calculator/Calculator";

function App() {
    return ( <
        ContextProvider >
        <
        div className = "App" >
        <
        Calculator / >
        <
        /div> <
        /ContextProvider>
    );
}

export default App;