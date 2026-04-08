function ProjectCard({ title, description, link, live }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>

            <div className="buttons">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    View Code
                </a>

                <a href={live} target="_blank" rel="noopener noreferrer">
                    Live demo
                </a>
            </div>
            </div>
    );
}

export default ProjectCard;