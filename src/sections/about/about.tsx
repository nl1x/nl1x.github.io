import './about.css';
import Picture from "../../components/ui/picture/picture.tsx";
import Emphasis from "../../components/ui/emphasis/emphasis.tsx";
import Button from "../../components/ui/button/button.tsx";
import { RxDownload, RxGithubLogo } from "react-icons/rx";

function About() {
  return (
    <section id="about">
      <div className="hero flex flex-col items-center xl:flex-row gap-10 overflow-hidden">
        <div className="hero-text flex flex-col align-center text-center xl:text-right gap-7">
          <div className="flex flex-col">
            <h2><Emphasis italic>Pentesteur junior</Emphasis></h2>
            <h2>et développeur</h2>
            <h2><Emphasis italic>Full-Stack</Emphasis>.</h2>
          </div>
          <p className="w-full font-semibold text-gray-400">Passionné d'informatique depuis plusieurs années, je suis prêt à vous accompagner dans la création, le déploiement et la sécurisation de vos infrastructures logicielles.</p>
          <div className="flex flex-col xl:flex-row xl:justify-end gap-5 items-center xl:items-end">
            <Button icon={<RxDownload/>} download={"CV_Nathan-Jeannot_2026.pdf"} href="./CV_Nathan-Jeannot_2026.pdf" style='primary'>CV_Nathan-Jeannot_2026.pdf</Button>
            <Button href="https://github.com/nl1x" noredirect icon={<RxGithubLogo/>} style='secondary'>Profil Github</Button>
          </div>
        </div>
        <Picture url="me.jpg" alt="my-picture"/>
      </div>
    </section>
  )
}

export default About;