import Lanyard from './Lanyard';

export default function FunPage() {
  return (
    <section className="page fun-page">
      <div className="about-scroller" aria-label="Thank you for visiting my portfolio">
        <div className="about-scroller-track">
          <span>
            THIS SECTION IS STILL A WORK IN PROGRESS COME BACK SOON
          </span>
          <span aria-hidden="true">
            THIS SECTION IS STILL A WORK IN PROGRESS COME BACK SOON
          </span>
          <span aria-hidden="true">
            THIS SECTION IS STILL A WORK IN PROGRESS COME BACK SOON
          </span>
        </div>
      </div>
      <div className="fun-content">
        <div className="fun-layout">
          <div className="fun-lanyard" aria-hidden="true">
            <Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} fov={20} transparent />
          </div>
        </div>
      </div>
    </section>
  );
}
