import UpdateBanner from './UpdateBanner';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    period: 'SUMMER 2025',
    number: 1,
    imageUrl:
      'https://www.figma.com/api/mcp/asset/5de0b33b-5025-473e-ae47-baeadc724f6c',
    title: 'SWE Internship @ XL8.ai',
    description:
      'Fullstack web development—API for subtitle translation format conversion (.srt, .vtt, .stl, .ass) & subtitle video burn-in',
  },
  {
    id: 2,
    period: 'JAN – MAY 2026',
    number: 2,
    imageUrl:
      'https://www.figma.com/api/mcp/asset/ff13ce48-9d4d-44f6-9a19-5f17b00fe08c',
    title: "Anabel's Grocery",
    description:
      'Backend web development—implemented API for database of users/time shifts & authorization via Firebase',
    href: 'https://github.com/cornellh4i/anabels-grocery',
  },
  {
    id: 3,
    period: 'JAN – MAY 2026',
    number: 3,
    imageUrl:
      'https://www.figma.com/api/mcp/asset/8c1bfcef-1ac8-4d73-bed2-45ee7e85185b',
    title: 'Wolters Kluwer',
    description:
      'Interface for AI research tool for product managers—document categorization/study',
  },
  {
    id: 4,
    period: 'SUMMER 2025',
    number: 4,
    imageUrl:
      'https://www.figma.com/api/mcp/asset/070863d7-899f-4612-8387-53b20cfb7b0d',
    title: 'Quabble',
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
          />
        ))}
      </div>
    </section>
  );
}
