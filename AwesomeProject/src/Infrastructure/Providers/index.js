// import { PaperProvider } from "react-native-paper";
import PaperProviders from "./paper.provider";
import App from "../../../App";


const Provider=()=>{
    return(
        <PaperProviders>
            <App/>
        </PaperProviders>
    )
}

export default Provider