import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"
import ContactSection from "./components/ContactSection"
import ServicesSection from "./components/ServicesSection"
import MySkills from "./components/MySkills"
import AboutMe from "./components/AboutMe"
import Resume from "./components/Resume"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Navbar/>
    <main>
      <HeroSection/>
      <AboutMe/>
      <Resume/>
      <ProjectSection/>
      <ServicesSection/>
      <MySkills/>
      <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App
