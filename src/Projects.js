import './Projects.css';
import Project from './Project';
import uploaderImg from './assets/image-uploader.png';
import onepageImg from './assets/onepage-template.png';
import portalImg from './assets/portal-template.png';
import calculatorImg from './assets/react-calculator.png';
import steveImg from './assets/stevepert-website.png';
import strengImg from './assets/strengmc-website.png';

const Projects = () => {
    return (
        <div className="projects section">
            <h2>Projects</h2>
            <div className="projects--container">
                <Project
                    title = "Minecraft Portal Template"
                    description = "A simple, clean Minecraft 'Portal' template avaliable for free on SpigotMC. Over 19,000 downloads."
                    image = {portalImg}
                    imagealt = "Portal main page screenshot"
                    buttons = {[
                        {text: "Visit on SpigotMC", link: "https://www.spigotmc.org/resources/minecraft-website-template-portal-%E2%98%85-responsive-%E2%98%85-easy.48410/", id: "1"},
                        {text: "View Source", link: "https://github.com/bybilly/minecraft-web-portal", id: "2"}
                    ]}
                    key = "1"
                />
                <Project
                    title = "Minecraft Onepage Template"
                    description = "A single page web template avaliable for free on SpigotMC. Over 9000 downloads."
                    image = {onepageImg}
                    imagealt = "Onepage main page screenshot"
                    buttons = {[
                        {text: "Visit on SpigotMC", link: "https://www.spigotmc.org/resources/dusk-%E2%98%85-minecraft-dark-theme-website-%E2%98%85-fully-responsive.51246/", id: "1"}
                    ]}
                    key = "2"
                />
                <Project
                    title = "Simple Image Uploader"
                    description = "A simple image uploader which stores images on AWS and is coded using NodeJS"
                    image = {uploaderImg}
                    imagealt = "Uploader main page screenshot"
                    buttons = {[
                        {text: "Visit", link: "https://uploader.bybilly.uk", id: "1"},
                        {text: "View Source", link: "https://github.com/bybilly/Image-Uploader", id: "2"}
                    ]}
                    key = "3"
                />
                <Project
                    title = "React Calculator"
                    description = "A basic react calculator hosted on Google Firebase using hot-formula-parser to parse the input"
                    image = {calculatorImg}
                    imagealt = "React calculator main page screenshot"
                    buttons = {[
                        {text: "Visit", link: "https://calculator.bybilly.uk/", id: "1"},
                        {text: "View Source", link: "https://github.com/bybilly/react-calculator", id: "2"}
                    ]}
                    key = "4"
                />
                <Project
                    title = "StrengMC Website"
                    description = "The official StrengMC Minecraft server website, integrating with the server and using PHP in the back-end"
                    image = {strengImg}
                    imagealt = "StrengMC home page screenshot"
                    buttons = {[
                        {text: "Visit", link: "https://strengmc.com/", id: "1"}
                    ]}
                    key = "5"
                />
                <Project
                    title = "Steve Pert's Website"
                    description = "The official website of the UK singer Steve Pert"
                    image = {steveImg}
                    imagealt = "Steve Pert home page screenshot"
                    buttons = {[
                        {text: "Visit", link: "https://stevepert.com/", id: "1"}
                    ]}
                    key = "6"
                />
            </div>
        </div>
    );
}

export default Projects;