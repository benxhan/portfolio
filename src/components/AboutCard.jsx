import PropTypes from 'prop-types';

export default function AboutCard({
  variant,
  title,
  imageUrl,
  imagePosition = 'top',
  children,
}) {
  const cardClass = `about-card ${variant}`;

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

  return <div className={cardClass}>{cardContent}</div>;
}

AboutCard.propTypes = {
  variant: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imagePosition: PropTypes.oneOf(['top', 'bottom']),
  children: PropTypes.node.isRequired,
};
