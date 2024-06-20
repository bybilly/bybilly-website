import './About.css';
import billyImg from './assets/billy.webp';

const About = ({ age }) => {
    return (
        <div className="about section">
            <h2>About Me</h2>
            <div className="about--section">
                <img className="profile-picture" alt="Billy sitting on a bike and smiling awkwardly" src={billyImg} />
                <div className="about--text">
                    <h3>Hello!</h3>
                    <p>I'm Billy. I'm a { age } year old student studying Computer Science at the University of Manchester.</p>
                    <p>On this page are a few of my projects, feel free to check them out.</p>
                    <br />
                    <p>My LinkedIn profile is available at <a href="https://www.linkedin.com/in/william-lardner/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/william-lardner/</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default About;