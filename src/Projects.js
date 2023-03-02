import './Projects.css';
import Project from './Project';
import uploaderImg from './assets/image-uploader.webp';
import onepageImg from './assets/onepage-template.webp';
import portalImg from './assets/portal-template.webp';
import bergenImg from './assets/bergen.webp';
import steveImg from './assets/stevepert-website.webp';
import strengImg from './assets/strengmc-website.webp';

const Projects = () => {
    return (
        <div className="projects section">
            <h2>Projects</h2>
            <div className="projects--container">
                <Project
                    title = "Minecraft Portal Template"
                    description = "A simple, clean Minecraft 'Portal' template avaliable for free on SpigotMC. Over 27,000 downloads."
                    image = {portalImg}
                    imagealt = "Portal main page screenshot"
                    buttons = {[
                        {text: "Visit on SpigotMC", link: "https://www.spigotmc.org/resources/minecraft-website-template-portal-%E2%98%85-responsive-%E2%98%85-easy.48410/", id: "1"},
                        {text: "View Source", link: "https://github.com/bybilly/minecraft-web-portal", id: "2"}
                    ]}
                    key = "1"
                />
                <Project
                    title = "Bergen Drone Footage"
                    description = "Some drone clips I've put together from my recent trip to Bergen, Norway."
                    image = {bergenImg}
                    imagealt = "Image of Bergen"
                    buttons = {[
                        {text: "Watch video", link: "https://www.youtube.com/watch?v=0IUwHje_AK0/", id: "1"}
                    ]}
                    key = "2"
                />
                <Project
                    title = "Minecraft One Page Template"
                    description = "A single page web template avaliable for free on SpigotMC. Over 11,000 downloads."
                    image = {onepageImg}
                    imagealt = "Onepage main page screenshot"
                    buttons = {[
                        {text: "Visit on SpigotMC", link: "https://www.spigotmc.org/resources/dusk-%E2%98%85-minecraft-dark-theme-website-%E2%98%85-fully-responsive.51246/", id: "1"}
                    ]}
                    key = "3"
                />
                <Project
                    title = "Simple Image Uploader"
                    description = "A simple image uploader which stores images on AWS and is coded using NodeJS."
                    image = {uploaderImg}
                    imagealt = "Uploader main page screenshot"
                    buttons = {[
                        {text: "View Source", link: "https://github.com/bybilly/Image-Uploader", id: "2"}
                    ]}
                    key = "4"
                />
                <Project
                    title = "StrengMC Website"
                    description = "The official StrengMC Minecraft server website, which integrated with the Minecraft server and used PHP in the back-end."
                    image = {strengImg}
                    imagealt = "StrengMC home page screenshot"
                    key = "5"
                />
                <Project
                    title = "Steve Pert's Website"
                    description = "The official website of the late UK singer Steve Pert. May he rest in peace."
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