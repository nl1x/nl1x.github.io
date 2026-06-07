import TopBar from "../../components/ui/topbar/topbar.tsx";
import Tag from "../../components/ui/tag/tag.tsx";
import './header.css';
import Link from "../../components/ui/link/link.tsx";
import { scrollTo } from "../../services/navigation.ts";

function Header() {
  return (
    <TopBar
      className="header"
      left={<Tag onClick={() => scrollTo("contact")} status="success">AVAILABLE</Tag>}
      center={
        <span className="flex justify-center">
          <p className="text-[2rem] whitespace-nowrap font-bold">
            Nathan JEANNOT
          </p>
        </span>
      }
      right={
        <div className="flex whitespace-nowrap overflow-hidden flex-row-reverse gap-4">
          <Link onClick={() => scrollTo("contact")}>Contact</Link>
          <Link onClick={() => scrollTo("skills")}>Compétences</Link>
          <Link onClick={() => scrollTo("projects")}>Projets</Link>
          <Link onClick={() => scrollTo("about")}>À propos</Link>
        </div>
      }
    />
  );
}

export default Header;