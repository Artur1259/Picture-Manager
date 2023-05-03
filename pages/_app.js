import { AuthProvider } from "../context/AuthContext";
import "../styles/global.css";
import "focus-visible";

function PictureManager({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>)
}

export default PictureManager;
