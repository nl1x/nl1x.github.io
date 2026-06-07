import './burger-button.pcss';
import Link from "../link/link.tsx";
import { scrollTo } from "../../../services/navigation.ts";

interface BurgerButtonProps {
  links: {
    label: string,
    section: string
  }[];
}

function BurgerButton(props: BurgerButtonProps) {
  return (
    <nav className='burger-button-wrapper'>
      <div className='mobile-view'>
        <span className="burger">
          <span className='burger-line'></span>
          <span className='burger-line'></span>
          <span className='burger-line'></span>
        </span>
      </div>
      <div className="desktop-view">
        {
          props.links.map((link, key) => {
            return ( <Link key={key} onClick={() => scrollTo(link.section)}>{link.label}</Link> )
          })
        }
      </div>
    </nav>
  )
}

export default BurgerButton;
