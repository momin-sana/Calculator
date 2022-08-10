import "./App.css";
import { ContextProvider } from "./Calculator/ContextProvider";
import Calculator from "./Calculator/Calculator";
// import FirstCalculator from "./FirstCalculator/FirstCalculator";

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