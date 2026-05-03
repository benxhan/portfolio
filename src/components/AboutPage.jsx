import { useState, useEffect } from 'react';
import AboutCard from './AboutCard';
import { apiClient } from '../api/client';

export default function AboutPage() {
  const [visitorCount, setVisitorCount] = useState(0);
  const email = 'benxhan00@gmail.com';
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    async function initializeVisitorTracking() {
      try {
        // Track this visitor
        const trackData = await apiClient.trackVisitor();
        setVisitorCount(trackData.count);
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    }

    initializeVisitorTracking();
  }, []);

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
    <section className="page about-page">
      <div className="about-scroller" aria-label="Thank you for visiting my portfolio">
        <div className="about-scroller-track">
          <span>
            THANK YOU FOR VISITING MY PORTFOLIO YOU ARE VERY SWEET & I APPRECIATE YOU
          </span>
          <span aria-hidden="true">
            THANK YOU FOR VISITING MY PORTFOLIO YOU ARE VERY SWEET & I APPRECIATE YOU
          </span>
          <span aria-hidden="true">
            THANK YOU FOR VISITING MY PORTFOLIO YOU ARE VERY SWEET & I APPRECIATE YOU
          </span>
        </div>
      </div>

      <div className="about-content">
        <div className="about-header">
          <div className="about-greeting">hey, thanks for visiting my site!</div>
          <div className="about-visitor">
            <span className="about-visitor-context">you are the</span>{' '}
            <u className="about-visitor-highlight">{visitorCount}{visitorCount === 1 ? 'st' : visitorCount === 2 ? 'nd' : visitorCount === 3 ? 'rd' : 'th'} unique</u>
            {' '}<span className="about-visitor-context">visitor.</span>
          </div>
        </div>

        <div>
          <p className="about-bio">
            I'm a <strong>software engineer</strong> studying computer science at
            Cornell University. I'm extremely passionate about human-centered
            design and software development.
          </p>
          <p className="about-subtitle">But what else do I get up to?</p>
        </div>

        <div className="about-grid">
          {/* Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <AboutCard
              variant="orange"
              title="Hack4Impact"
              imageUrl="/images/hack4impact.jpg"
            >
              On campus-involvement: I am part of the Cornell Hack4Impact branch,
              working alongside non-profits to develop technology for them!!
              Great people & I've learned so much (hi johnny)
            </AboutCard>

            <AboutCard
              variant="dark"
              title="Some stuff I love"
            >
              My (personal) top 4 movies:
              <ul>
                <li>Everything Everywhere All at Once</li>
                <li>Parasite</li>
                <li>Whisper of the Heart</li>
                <li>Howl's Moving Castle</li>
              </ul>
              <br />
              My favorite show is Severance & I'm currently watching Succession
              (pretty good so far).
              <br />
              <br />
              I'm also pretty good at valorant (unfortunately)—immortal 1 atm!!
            </AboutCard>

            <AboutCard
              variant="orange"
              title="Where I'm from"
              imageUrl="https://www.figma.com/api/mcp/asset/efd2f10c-79ef-4a4c-9947-d9a7f3ba336e"
              imagePosition="bottom"
            >
              From the Bay Area in California! Here's a picture right by the
              Golden Gate Bridge that I took.
            </AboutCard>
          </div>

          {/* Column 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <AboutCard
              variant="dark"
              title="Design Consulting Cornell"
              imageUrl="https://www.figma.com/api/mcp/asset/9fdb4171-64a1-4725-8f9f-d3e004d4ad9c"
            >
              Another club I'm part of! This is where I first started learning
              about user research, figma, and design in general. Love the people &
              have learned so much from it. Pictured: our career trek to nyc.
            </AboutCard>

            <AboutCard
              variant="orange"
              title="Attempting to Travel More"
              imageUrl="https://www.figma.com/api/mcp/asset/06db231b-1d72-4368-8d3e-99668e39d975"
              imagePosition="bottom"
            >
              (Kinda) fun fact about me: I've only left the US once—but I REALLY
              want to start traveling more<br />
              <br />
              Dream destination: Hong Kong or Kyoto<br />
              <br />
              Pictured: me on the new york city subway
            </AboutCard>

            <AboutCard
              variant="dark"
              title="Contact"
            >
              Really passionate about software development & UX design. I want to
              find work that I really enjoy!
              <br />
              <br />
              Find more of me:
              <div className="contact-links">
                <a
                  href="https://linkedin.com/in/benphans"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/benxhan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
                <div className="contact-email-wrap">
                  {emailCopied && <div className="sidebar-link-copied">Copied!</div>}
                  <button type="button" className="contact-email" onClick={handleCopyEmail}>
                    Email
                  </button>
                </div>
              </div>
            </AboutCard>
          </div>
        </div>
      </div>
    </section>
  );
}
