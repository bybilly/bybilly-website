import './Project.css';

const Project = ({ title, description, image, imagealt, buttons = [] }) => {
    const buttonItems = buttons.map((btn) =>
        <a key={btn.id} target="_blank" rel="noreferrer" href={btn.link}><button className="nice-btn">{btn.text}</button></a>
    );

    return (
        <div className="project">
            <div className="project--header">
                <img src={image} alt={imagealt} />
            </div>
            <div className="project--body">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="project--footer">
                {buttonItems}
            </div>
        </div>
    );
}

export default Project;