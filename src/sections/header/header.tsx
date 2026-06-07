import TopBar from "../../components/ui/topbar/topbar.tsx";
import Tag from "../../components/ui/tag/tag.tsx";
import './header.pcss';
import Link from "../../components/ui/link/link.tsx";
import { scrollTo } from "../../services/navigation.ts";
import BurgerButton from "../../components/ui/burger-button/burger-button.tsx";

function Header() {
  return (
    <TopBar
      className="header"

      left={
        // <Tag onClick={() => scrollTo("contact")} status="success">AVAILABLE</Tag>
        <p>...</p>
      }

      center={
        <p className="">Nathan JEANNOT</p>
      }

      right={
        // <p>Test</p>
        <BurgerButton links={[
          { label: 'Contact', section: 'contact' },
          { label: 'Compétences', section: 'skills' },
          { label: 'Projets', section: 'projects' },
          { label: 'À propos', section: 'about' },
        ]}>
        </BurgerButton>
        // <div className="">
        //   <Link onClick={() => scrollTo("contact")}>Contact</Link>
        //   <Link onClick={() => scrollTo("skills")}>Compétences</Link>
        //   <Link onClick={() => scrollTo("projects")}>Projets</Link>
        //   <Link onClick={() => scrollTo("about")}>À propos</Link>
        // </div>
      }
    />
  );
}

export default Header;