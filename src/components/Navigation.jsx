import PropTypes from 'prop-types';

export default function Navigation({ activePage, onPageChange }) {
  const pages = [
    { id: 'work', num: '01', label: 'work' },
    { id: 'about', num: '02', label: 'about' },
    { id: 'fun', num: '03', label: 'fun' },
  ];

  return (
    <nav className="nav-wrap" aria-label="Site sections">
      {pages.map((page) => (
        <button
          key={page.id}
          className={`nav-btn ${activePage === page.id ? 'active' : ''}`}
          onClick={() => onPageChange(page.id)}
        >
          <span className="nav-num">{page.num}.</span>
          <span className="nav-label">{page.label}</span>
        </button>
      ))}
    </nav>
  );
}

Navigation.propTypes = {
  activePage: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
