import './About.css';

const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <div className="about--section">
                <img className="profile-picture" src="https://bybillyuploader.s3.eu-west-2.amazonaws.com/kq8qmd50.png" />
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