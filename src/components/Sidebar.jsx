import PropTypes from 'prop-types';
import Navigation from './Navigation';

export default function Sidebar({ activePage, onPageChange }) {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-header">
          <div className="sidebar-name">Ben Han</div>
          <div className="sidebar-sub">CS @ Cornell University</div>
        </div>

        <Navigation activePage={activePage} onPageChange={onPageChange} />
      </div>

      <div className="sidebar-logo">
        <svg
          className="logo-star"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20 2L23.09 13.26L34.64 9.78L26.18 18L34.64 26.22L23.09 22.74L20 34L16.91 22.74L5.36 26.22L13.82 18L5.36 9.78L16.91 13.26L20 2Z"
            fill="#f3f1ec"
            stroke="#f3f1ec"
            strokeWidth="0.5"
          />
        </svg>
        <div className="logo-location">Ithaca, NY</div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  activePage: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
