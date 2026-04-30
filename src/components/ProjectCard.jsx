import PropTypes from 'prop-types';

export default function ProjectCard({
  period,
  number,
  imageUrl,
  title,
  description,
}) {
  return (
    <a className="project-card" href="#" aria-label={title}>
      <div className="card-meta">
        <span>{period}</span>
        <span>NO. {number}</span>
      </div>
      <img className="card-image" src={imageUrl} alt={title} />
      <div>
        <div className="card-title">{title}</div>
        <div className="card-desc">{description}</div>
      </div>
    </a>
  );
}

ProjectCard.propTypes = {
  period: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
