import Bokeh from '../Bokeh/Bokeh'
import HeroContent from './HeroContent'


const Hero = () => {


    return (
        <section className="hero bg-[#0e0008] min-h-[90vh] relative w-full flex justify-center overflow-hidden">
            <Bokeh />
            <HeroContent />
        </section>
    )
}

export default Hero

