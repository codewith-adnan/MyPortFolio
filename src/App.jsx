import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"
import ContactSection from "./components/ContactSection"
import ServicesSection from "./components/ServicesSection"
import MySkills from "./components/MySkills"
import AboutMe from "./components/AboutMe"
import Resume from "./components/Resume"

function App() {
  return (
    <>
      <HeroSection/>
      <AboutMe/>
      <Resume/>
      <ProjectSection/>
      <ServicesSection/>
      <MySkills/>
      <ContactSection/>
    </>
  )
}

export default App
