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
                    <p>I'm Billy. I'm 18, recently left college, and I'm going to university this September.</p>
                    <p>I have a huge passion for Computer Science and I'd love to have a job working in the field when I graduate.</p>
                    <p>On this page are a few of my projects, feel free to check them out.</p>
                </div>
            </div>
        </div>
    );
}

export default About;