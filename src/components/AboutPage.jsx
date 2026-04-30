import AboutCard from './AboutCard';

export default function AboutPage() {
  return (
    <section className="page">
      <div className="about-header">
        <div className="about-greeting">hey, thanks for visiting my site!</div>
        <div className="about-visitor">
          <span className="about-visitor-context">you are the</span>{' '}
          <u className="about-visitor-highlight">4th unique</u>
          {' '}<span className="about-visitor-context">visitor.</span>
        </div>
      </div>

      <div>
        <p className="about-bio">
          I'm a <strong>software engineer</strong> studying computer science at
          Cornell University. I'm extremely passionate about human-centered
          design and software development.
        </p>
        <p className="about-subtitle">what else do i get up to?</p>
      </div>

      <div className="about-grid">
        {/* Column 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <AboutCard
            variant="orange"
            title="Hack4Impact"
            imageUrl="/images/hack4impact.jpg"
          >
            on campus-involvement: part of the cornell hack4impact branch,
            working alongside non-profits to develop technology for them!! best
            part of my mondays :)
          </AboutCard>

          <AboutCard
            variant="dark"
            title="Some stuff I love"
          >
            my (personal) top 4 movies:
            <ul>
              <li>everything everywhere all at once</li>
              <li>parasite</li>
              <li>whisper of the heart</li>
              <li>howl's moving castle</li>
            </ul>
            <br />
            my favorite show is severance & i'm currently watching succession
            (pretty good so far).
            <br />
            <br />
            i'm also pretty good at valorant (unfortunately)—immortal 1 atm!!
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
            another club i'm a part of! this is where i first started learning
            about user research, figma, and design in general. love the people &
            have learned so much from it. picture from our career trek to nyc.
          </AboutCard>

          <AboutCard
            variant="orange"
            title="Attempting to Travel More"
            imageUrl="https://www.figma.com/api/mcp/asset/06db231b-1d72-4368-8d3e-99668e39d975"
            imagePosition="bottom"
          >
            (kinda) fun fact about me: I've only left the US once—but I REALLY
            want to start traveling more<br />
            <br />
            dream destination: hong kong or kyoto<br />
            <br />
            pictured: me on the new york city subway
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
              <a href="mailto:benxhan00@gmail.com">Email ↗</a>
            </div>
          </AboutCard>
        </div>
      </div>
    </section>
  );
}
