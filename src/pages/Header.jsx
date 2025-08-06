import GooeyNav from '../components/GooeyNav'
// update with your own items

const items = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Contact", to: "contact" },
];


function Header() {
  return (
    <>

<div style={{ position: 'absolute',maxWidth: "1200px", margin: "0 auto",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    alignItems: "center", 
    color: "#fff",
    }}>
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>
</>
);
}

export default Header;
