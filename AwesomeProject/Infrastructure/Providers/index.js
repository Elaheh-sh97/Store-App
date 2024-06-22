import { PaperProvider } from "react-native-paper";
import App from "../../App";



const Provider=()=>{
    return(
        <PaperProvider>
            <App/>
        </PaperProvider>
    )
}

export default Provider