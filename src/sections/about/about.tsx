import './about.pcss';
import Picture from "../../components/ui/picture/picture.tsx";
import Emphasis from "../../components/ui/emphasis/emphasis.tsx";
// import Button from "../../components/ui/button/button.tsx";
// import { RxDownload, RxGithubLogo } from "react-icons/rx";

function About() {
  return (
    <section id="about">
      <div className="hero">
        <div className="hero-text">
          <div className="hero-title">
            <h2><Emphasis italic>Pentesteur junior</Emphasis>
              <br/>et développeur
              <br/><Emphasis italic>Full-Stack</Emphasis>.
            </h2>
          </div>
          <p className="hero-description">Passionné d'informatique depuis plusieurs années, je suis prêt à vous accompagner dans la création, le déploiement et la sécurisation de vos infrastructures logicielles.</p>
        </div>
        <Picture className="hero-logo" url="me.jpg" alt="my-picture"/>
        {/*<div className="hero-buttons">*/}
        {/*  <Button icon={<RxDownload/>} download={"CV_Nathan-Jeannot_2026.pdf"} href="./CV_Nathan-Jeannot_2026.pdf" style='primary'>CV_Nathan-Jeannot_2026.pdf</Button>*/}
        {/*  <Button href="https://github.com/nl1x" noredirect icon={<RxGithubLogo/>} style='secondary'>Profil Github</Button>*/}
        {/*</div>*/}
      </div>
    </section>
  )
}

export default About;