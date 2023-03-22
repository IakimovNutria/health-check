import {ImageBackground} from "react-native";


function BgImageScreen({children}) {
    return (
        <ImageBackground source={require("../img/bg.jpeg")} style={{width: '100%', height: '100%'}}>
            {children}
        </ImageBackground>
    );
}

export default BgImageScreen;
