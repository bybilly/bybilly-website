import './Project.css';

const Project = ({ title, description, image, buttons = [], key }) => {
    const buttonItems = buttons.map((btn) =>
        <a target="_blank" href={btn.link}><button className="nice-btn">{btn.text}</button></a>
    );

    return (
        <div className="project" key={key}>
            <div className="project--header">
                <img src={image} />
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