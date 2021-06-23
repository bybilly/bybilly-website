import './Projects.css';
import Project from './Project';

const Projects = () => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="projects--container">
                <Project
                    title = "Minecraft Portal Template"
                    description = "A simple, clean Minecraft 'Portal' template avaliable for free on SpigotMC. Over 19,000 downloads."
                    image = "https://bybillyuploader.s3.eu-west-2.amazonaws.com/kq8n1mkg.png"
                    buttons = {[
                        {text: "Visit on SpigotMC", link: "https://www.spigotmc.org/resources/minecraft-website-template-portal-%E2%98%85-responsive-%E2%98%85-easy.48410/"},
                        {text: "View Source", link: "https://github.com/bybilly/minecraft-web-portal"}
                    ]}
                />
                <Project
                    title = "Minecraft Onepage Template"
                    description = "A single page web template avaliable for free on SpigotMC. Over 9000 downloads."
                    image = "https://bybillyuploader.s3.eu-west-2.amazonaws.com/kq8nvlq1.png"
                    buttons = {[
                        {text: "Visit on SpigotMC", link: "https://www.spigotmc.org/resources/dusk-%E2%98%85-minecraft-dark-theme-website-%E2%98%85-fully-responsive.51246/"}
                    ]}
                />
                <Project
                    title = "Simple Image Uploader"
                    description = "A simple image uploader which stores images on AWS and is coded using NodeJS"
                    image = "https://bybillyuploader.s3.eu-west-2.amazonaws.com/kq8o59um.png"
                    buttons = {[
                        {text: "Visit", link: "https://uploader.bybilly.uk"},
                        {text: "View Source", link: "https://github.com/bybilly/Image-Uploader"}
                    ]}
                />
                <Project
                    title = "React Calculator"
                    description = "A basic react calculator hosted on Google Firebase using hot-formula-parser to parse the input"
                    image = "https://bybillyuploader.s3.eu-west-2.amazonaws.com/kq8osfs6.png"
                    buttons = {[
                        {text: "Visit", link: "https://calculator.bybilly.uk/"},
                        {text: "View Source", link: "https://github.com/bybilly/react-calculator"}
                    ]}
                />
                <Project
                    title = "StrengMC Website"
                    description = "The official StrengMC Minecraft server website, integrating with the server and using PHP in the back-end"
                    image = "https://bybillyuploader.s3.eu-west-2.amazonaws.com/kq8ox88u.png"
                    buttons = {[
                        {text: "Visit", link: "https://strengmc.com/"}
                    ]}
                />
                <Project
                    title = "Steve Pert's Website"
                    description = "The official website of the UK singer Steve Pert"
                    image = "https://bybillyuploader.s3.eu-west-2.amazonaws.com/kq8ozzds.png"
                    buttons = {[
                        {text: "Visit", link: "https://stevepert.com/"}
                    ]}
                />
            </div>
        </div>
    );
}

export default Projects;