import UpdateBanner from './UpdateBanner';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    period: 'SUMMER 2025',
    number: 1,
    imageUrl: '/images/xl8-swe-internship.png',
    title: 'SWE Internship @ XL8.ai',
    noCursor: true,
    description:
      'Fullstack web development—API for subtitle translation format conversion (.srt, .vtt, .stl, .ass) & subtitle video burn-in',
  },
  {
    id: 2,
    period: 'JAN – MAY 2026',
    number: 2,
    imageUrl: '/images/anabels-grocery.png',
    title: "Anabel's Grocery",
    description:
      'Backend web development—implemented API for database of users/time shifts & authorization via Firebase',
    href: 'https://github.com/cornellh4i/anabels-grocery',
  },
  {
    id: 3,
    period: 'JAN – MAY 2026',
    number: 3,
    imageUrl: '/images/wolters-kluwer.png',
    title: 'Wolters Kluwer',
    noCursor: true,
    description:
      'Interface for AI research tool for product managers—document categorization/study',
  },
  {
    id: 4,
    period: 'SUMMER 2025',
    number: 4,
    imageUrl: '/images/quabble.png',
    title: 'Quabble',
    noCursor: true,
    description:
      'Surveyed 15 participants in 2 rounds of interviews & incorporated information from 4 academic studies for UX research.',
  },
];

export default function WorkPage() {
  return (
    <section className="page active">
      <UpdateBanner />
      <div className="work-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            period={project.period}
            number={project.number}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            href={project.href}
            noCursor={project.noCursor}
          />
        ))}
      </div>
    </section>
  );
}
