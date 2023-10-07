import Counter from "../../components/Counter/Counter";
import Banner from "../../components/Header/Banner";
import Services from "../../components/Services/Services";
import ShortAbout from "../../components/ShortAbout/ShortAbout";
import Sponsor from "../../components/Sponsor/Sponsor";
import Wave from "../../components/Wave/Wave";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Wave></Wave>
            <ShortAbout></ShortAbout>
            <Services></Services>
            <Counter></Counter>
            <Sponsor></Sponsor>
        </div>
    );
};

export default Home;