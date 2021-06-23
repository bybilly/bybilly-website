import './Hero.css';
import ballsImg from './balls.svg';

const Hero = () => {
    return (
        <div className="hero">
            <img src={ballsImg} alt="Glow" />
            <div className="hero--content">
                <h1>
                    Billy's
                    <span className="hero--highlight">Stuff</span>
                </h1>
                <p>A collection of my projects and other cool stuff I'm getting up to</p>
            </div>
        </div>
    );
}

export default Hero;