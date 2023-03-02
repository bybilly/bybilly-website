import './About.css';
import billyImg from './assets/billy.webp';

const About = () => {
    return (
        <div className="about section">
            <h2>About Me</h2>
            <div className="about--section">
                <img className="profile-picture" alt="Billy sitting on a bike and smiling awkwardly" src={billyImg} />
                <div className="about--text">
                    <h3>Hey!</h3>
                    <p>I'm Billy. I'm a 20 year old student studying Computer Science at the University of Manchester.</p>
                    <p>On this page are a few of my projects, feel free to check them out.</p>
                </div>
            </div>
        </div>
    );
}

export default About;