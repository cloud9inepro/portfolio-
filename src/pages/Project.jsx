  import MagicBento from '../components/MagicBento'

function Project() {
  return (
    <>
      <div className="project">
        <h1 >PROJECTS</h1>
        <p>
          Here are some of my projects that showcase my skills in web development and design.
          Each project reflects my commitment to quality and user experience.
        </p>

<MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/>
      </div>
    </>
  );
}

export default Project;