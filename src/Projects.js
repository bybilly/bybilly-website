import './Projects.css';
import Project from './Project';
import weatherImg from './assets/weather-type-dataset-example.webp';
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
                    description = "A simple, clean Minecraft 'Portal' template avaliable for free on SpigotMC. Over 30,000 downloads."
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
                    description = "Some drone clips I've put together from my trip to Bergen, Norway in March 2023."
                    image = {bergenImg}
                    imagealt = "Image of Bergen"
                    buttons = {[
                        {text: "Watch video", link: "https://www.youtube.com/watch?v=0IUwHje_AK0/", id: "1"}
                    ]}
                    key = "2"
                />
                <Project
                    title = "Weather Type Recognition Model"
                    description = "A convolutional neural network designed and trained with the Keras API to predict the weather type into the classes 'rain', 'lightning', or 'snow' in a provided image."
                    image = {weatherImg}
                    imagealt = "Example of weather type recognition model input image"
                    buttons = {[
                        {text: "View Source", link: "https://github.com/bybilly/Weather-Type-Recognition-Model", id: "1"}
                    ]}
                    key = "3"
                />
                <Project
                    title = "Minecraft One Page Template"
                    description = "A single page web template avaliable for free on SpigotMC. Over 12,000 downloads."
                    image = {onepageImg}
                    imagealt = "Onepage main page screenshot"
                    buttons = {[
                        {text: "Visit on SpigotMC", link: "https://www.spigotmc.org/resources/dusk-%E2%98%85-minecraft-dark-theme-website-%E2%98%85-fully-responsive.51246/", id: "1"}
                    ]}
                    key = "4"
                />
                <Project
                    title = "StrengMC Website"
                    description = "The official StrengMC Minecraft server website, which integrated with the Minecraft server databases and used PHP in the back-end."
                    image = {strengImg}
                    imagealt = "StrengMC home page screenshot"
                    key = "5"
                />
                <Project
                    title = "Steve Pert's Website"
                    description = "The official website of the late UK singer Steve Pert. May he rest in peace."
                    image = {steveImg}
                    imagealt = "Steve Pert home page screenshot"
                    key = "6"
                />
            </div>
        </div>
    );
}

export default Projects;