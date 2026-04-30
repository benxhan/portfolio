import PropTypes from 'prop-types';

export default function ProjectCard({
  index,
  period,
  number,
  imageUrl,
  title,
  description,
  href,
}) {
  return (
    <a
      className="project-card"
      style={{ '--card-index': index }}
      href={href || '#'}
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer noopener' : undefined}
      aria-label={title}
    >
      <div className="card-meta">
        <span>{period}</span>
        <span>NO. {number}</span>
      </div>
      <div className="card-image-wrap">
        <img className="card-image" src={imageUrl} alt={title} />
      </div>
      <div>
        <div className="card-title">{title}</div>
        <div className="card-desc">{description}</div>
      </div>
    </a>
  );
}

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string,
};
