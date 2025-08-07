
import { SiNodedotjs, SiReact, SiMongodb, SiEjs, SiNextui,} from "react-icons/si";
import InfiniteScroll from '../components/InfiniteScroll';
  
const items = [
  { content: <p className="skill-icon">Node.js<SiNodedotjs /> </p> },
  { content: <p className="skill-icon">React Vite<SiReact /> </p> },
  { content: <p className="skill-icon">MongoDB<SiMongodb /> </p> },
  { content: <p className="skill-icon">Express.js<SiNodedotjs /> </p> },
  { content: <p className="skill-icon">EJS<SiEjs /></p> },
  { content: <p className="skill-icon">UI/UX Awareness<SiNextui /></p> },
  { content: <p className="skill-icon">Problem-Solving<SiNextui /></p> },
   
   

];
  
function Skill() {
  return (
    <section id="skill" className="skill-section">
        <h2 className="skill-title">Skills</h2>
  


<div style={{height: '500px', position: 'relative'}}>
  <InfiniteScroll
    items={items}
    isTilted={true}
    tiltDirection='left'
    autoplay={true}
    autoplaySpeed={0.5}
    autoplayDirection="down"
    pauseOnHover={true}
  />
</div>
</section>
    );
}
export default Skill;