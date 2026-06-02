import TopBar from "../../components/ui/topbar/topbar.tsx";
import Tag from "../../components/ui/tag/tag.tsx";
import './header.css';
import Link from "../../components/ui/link/link.tsx";

function Header() {
  return (
    <TopBar
      className="header"
      left={<Tag status="error">NOT AVAILABLE</Tag>}
      center={
        <span className="flex justify-center">
          <p className="text-[2rem] whitespace-nowrap font-bold">
            Nathan JEANNOT
          </p>
        </span>
      }
      right={
        <div className="flex whitespace-nowrap overflow-hidden flex-row-reverse gap-4">
          <Link href="#contact">Contact</Link>
          <Link href="#skills">Compétences</Link>
          <Link href="#projects">Projets</Link>
          <Link href="#about">À propos</Link>
        </div>
      }
    />
  );
}

export default Header;