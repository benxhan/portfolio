import { useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

export default function Sidebar({ activePage, onPageChange }) {
  const email = 'benxhan00@gmail.com';
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2400);
  };

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
        <div className="sidebar-links" aria-label="Contact links">
          <a
            className="sidebar-link"
            href="https://www.linkedin.com/in/benphans"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <span className="sidebar-link-separator" aria-hidden="true">
            ,
          </span>
          <a
            className="sidebar-link"
            href="https://github.com/benxhan"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <span className="sidebar-link-separator" aria-hidden="true">
            ,
          </span>
          <div className="sidebar-email-wrap" style={{ position: 'relative' }}>
            {emailCopied && <div className="sidebar-link-copied">Copied!</div>}
            <button className="sidebar-link sidebar-email" type="button" onClick={handleCopyEmail}>
              Email
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  activePage: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
