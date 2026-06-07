import './picture.pcss';

interface PictureProps {
  className?: string | undefined;
  url: string;
  alt: string;
}

function Picture(props: PictureProps) {
  return (
    <img className={`picture ${props.className ?? ''}`} src={props.url} alt={props.alt}/>
  )
}

export default Picture;
