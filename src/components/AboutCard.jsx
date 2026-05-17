import PropTypes from 'prop-types';

export default function AboutCard({
  variant,
  title,
  imageUrl,
  imagePosition = 'top',
  href,
  className = '',
  style,
  children,
}) {
  const cardClass = `about-card ${variant} ${href ? 'about-card-link' : ''} ${className}`.trim();

  const cardContent = (
    <>
      {imageUrl && imagePosition === 'top' && (
        <img
          className="about-card-img"
          src={imageUrl}
          alt={title}
          style={{ aspectRatio: '16/10' }}
        />
      )}
      <div>
        <div className="about-card-title">{title}</div>
        <div className="about-card-desc">{children}</div>
      </div>
      {imageUrl && imagePosition === 'bottom' && (
        <img
          className="about-card-img"
          src={imageUrl}
          alt={title}
          style={{ aspectRatio: '4/5' }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        className={cardClass}
        style={style}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={title}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={cardClass} style={style}>
      {cardContent}
    </div>
  );
}

AboutCard.propTypes = {
  variant: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imagePosition: PropTypes.oneOf(['top', 'bottom']),
  href: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};
