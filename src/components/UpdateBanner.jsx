import { useState, useEffect } from 'react';

export default function UpdateBanner() {
  const [commit, setCommit] = useState({
    msg: 'fix: margins on sidebar adjustment',
    time: '1 day ago',
  });

  useEffect(() => {
    async function fetchLatestCommit() {
      try {
        const res = await fetch(
          'https://api.github.com/repos/benhan/portfolio/commits?per_page=1'
        );
        if (!res.ok) return;
        const data = await res.json();
        const commitData = data[0];
        const msg = commitData.commit.message.split('\n')[0].slice(0, 60);
        const date = new Date(commitData.commit.author.date);
        const diff = Math.round((Date.now() - date) / 86400000);
        const ago =
          diff === 0 ? 'today' : diff === 1 ? '1 day ago' : `${diff} days ago`;

        setCommit({ msg, time: ago });
      } catch (_) {
        // keep static fallback
      }
    }

    fetchLatestCommit();
  }, []);

  return (
    <div className="update-banner">
      <div className="update-header">
        <span className="update-title">latest update</span>
        <a
          className="update-link"
          href="https://github.com/benhan"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub repository"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-1.96c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56C20.21 21.42 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>
      </div>
      <div className="update-commit">
        <span>{commit.msg}</span>
        <span className="commit-dot"></span>
        <span>{commit.time}</span>
      </div>
    </div>
  );
}
