import { AboutUs } from "../components/AboutUs"
import { Apple } from "../components/Apple"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Models } from "../components/Models"
import { Testimonials } from "../components/Testimonials"
import { Footer } from "../components/Footer"


export const Home = () => {
    return (
        <>
            <Header />
            <Hero/>
            <AboutUs/>
            <Models/>
            <Apple/>
            <Testimonials/>
            <Footer/>
        </>

    )
}
