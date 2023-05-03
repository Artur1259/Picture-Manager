import Banner from "../components/Banner";
import Flow from "../components/Flow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Page from "../components/Page";
import Login from "../components/Login"
import { useAuth } from "../context/AuthContext";

function Home  (){
    const {currentUser} = useAuth()
   return (
    <>
    {!currentUser && <Login />}
    {currentUser && 
        <Page>
            <div>
                <Header />
                <Banner  />
                <Flow />
            </div>
            {/* <Footer /> */}
        </Page>}
    
        </>
    
    )
} 

// const STARS_URL = "https://api.github.com/repos/gregives/StegaPhoto";

// export const getStaticProps = async () => {
//     const response = await fetch(STARS_URL);
//     const { stargazers_count: stars } = await response.json();
//     // console.log(stars)
//     return {
//         props: {
//             stars,
//         },
//     };
// };

export default Home;
