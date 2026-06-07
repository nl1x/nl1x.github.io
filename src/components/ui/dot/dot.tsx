import './dot.pcss';

interface DotProps {
  color?: "success" | "warning" | "error";
}

function Dot(props: DotProps) {
  return (
    <span className="dot-wrapper">
      <span className={"dot " + props.color}></span>
    </span>
  )
}

export default Dot;