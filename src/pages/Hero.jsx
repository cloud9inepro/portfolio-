import ScrambledText from "../components/ScrambledText";
import ProfileCard from "../components/ProfileCard";
import avatar from "../assets/avatar2.png";
import "../App.css";
function Hero() {
  return (
    <>
      <div className="hero">
        <ScrambledText>
          Hi, I’m Gift Ojieh 👋 <br />
          Frontend Developer & Web Designer<br /> I build interactive, responsive
          websites with clean code and modern UI.
        </ScrambledText>

        <ProfileCard
          name="Ojieh Gift"
          title="Software Engineer"
          handle="Gift's codes"
          status="Online"
          contactText="Contact Me"
          avatarUrl={avatar}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          
         onContactClick={() => {
          const section = document.getElementById("contact");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
         }} }
        /> 
      </div>
    </>
  );
}

export default Hero;
