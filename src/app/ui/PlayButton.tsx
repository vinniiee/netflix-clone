import { FaPlay } from "react-icons/fa";

type PlayButtonProps = {
  classes?: string;
};

function PlayButton(props: PlayButtonProps) {
  const { classes } = props;
  return (
    <button className={`${classes} action-btn btn `}>
      <FaPlay size={12} /> <span>Play</span> 
    </button>
  );
}

export default PlayButton;
