
import { SiNodedotjs, SiReact, SiMongodb, SiEjs, SiNextui,} from "react-icons/si";
import InfiniteScroll from '../components/InfiniteScroll';
  
const items = [
  { content: <p className="skill-icon">Node.js<SiNodedotjs /> </p> },
  { content: <p className="skill-icon">React Vite<SiReact /> </p> },
  { content: <p className="skill-icon">MongoDB<SiMongodb /> </p> },
  { content: <p className="skill-icon">Express.js<SiNodedotjs /> </p> },
  { content: <p className="skill-icon">EJS<SiEjs /></p> },
  { content: <p className="skill-icon">UI/UX Awareness<SiNextui /></p> },
   
   

];
  
function Skill() {
  return (
    <>

  


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
</>
    );
}
export default Skill;