import PropTypes from 'prop-types';

export default function ProjectCard({
  index,
  period,
  number,
  imageUrl,
  title,
  description,
  href,
  noCursor,
}) {
  return (
    <a
      className={`project-card${noCursor ? ' project-card-no-cursor' : ''}`}
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
        <img
          className="card-image"
          src={imageUrl}
          alt={title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'><rect width='100%25' height='100%25' fill='%23f2f2f2'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-family='Arial, Helvetica, sans-serif' font-size='18'>Image unavailable</text></svg>";
          }}
        />
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
  noCursor: PropTypes.bool,
};
