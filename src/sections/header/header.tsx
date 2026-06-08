import './header.pcss';
import { scrollTo } from "../../services/navigation.ts";
import TopBar from "../../components/ui/topbar/topbar.tsx";
import BurgerButton from "../../components/ui/burger-button/burger-button.tsx";
import Tag from "../../components/ui/tag/tag.tsx";

function Header() {
  return (
    <TopBar
      className="header"

      left={ <Tag onClick={() => scrollTo("contact")} variant="success">AVAILABLE</Tag> }
      center={ <h6>Nathan JEANNOT</h6> }
      right={
        <BurgerButton links={[
          { label: 'Contact', section: 'contact' },
          { label: 'Compétences', section: 'skills' },
          { label: 'Projets', section: 'projects' },
          { label: 'À propos', section: 'about' },
        ]}>
        </BurgerButton>
      }
    />
  );
}

export default Header;