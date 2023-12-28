import Image from "next/image";

type NavbarProps = {
  classes?: string;
};

function Navbar(props: NavbarProps) {
  const { classes } = props;
  return (
    <div
      className={`${classes} flex justify-between w-full bg-gradient-to-b from-black/50 to-transparent text-white p-4 px-16`}
    >
      <Image
        src={"/static/logo.svg"}
        alt="netflix-logo"
        width={150}
        height={32}
      />
    </div>
  );
}

export default Navbar;
