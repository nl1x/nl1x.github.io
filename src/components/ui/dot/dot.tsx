import './dot.pcss';

interface DotProps {
  variant?: "success" | "warning" | "error";
}

function Dot(props: DotProps) {
  return (
    <span className="dot-wrapper">
      <span className={"dot " + props.variant}></span>
    </span>
  )
}

export default Dot;