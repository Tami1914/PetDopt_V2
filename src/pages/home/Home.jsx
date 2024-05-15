import Body from "../../assets/components/body/Body";
import CookiesWindow from "../../assets/components/cookiesWindow/CookiesWindow";
import Footer from "../../assets/components/footer/Footer";
import Header from "../../assets/components/header/Header";


function Home() {
    return (
        <>
            <div>
                <Header/>
                <CookiesWindow/>
                <Body/>
                <Footer/>
            </div>
        </>
    )
}

export default Home;