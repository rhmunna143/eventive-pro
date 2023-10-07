import Banner from "../../components/Header/Banner";
import Services from "../../components/Services/Services";
import ShortAbout from "../../components/ShortAbout/ShortAbout";
import Wave from "../../components/Wave/Wave";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Wave></Wave>
            <ShortAbout></ShortAbout>
            <Services></Services>
        </div>
    );
};

export default Home;