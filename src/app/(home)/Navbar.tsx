import Image from "next/image";

type NavbarProps = {
  classes?: string;
  username?: string;
};

function Navbar(props: NavbarProps) {
  const { classes, username } = props;
  return (
    <div
      className={`${classes} flex justify-start space-x-16
       items-center w-full bg-gradient-to-b from-black/90
        to-black/0 text-white p-4 px-16`}
      style={{ zIndex: 1000 }}
    >
      <Image
        src={"/static/logo.svg"}
        alt="netflix-logo"
        width={118}
        height={58}
      />
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex space-x-6 justify-start items-center">
          <nav>Home</nav>
          <nav>My List</nav>
        </div>
        <div className=" relative group ">
          <nav
            className={`z-50 group-hover:text-white group-hover:scale-105`}
          >
            vinniiee
          </nav>
          <a
            className={` z-10 btn bg-white/20 hover:bg-white/40 absolute right-1/2 translate-x-1/2 duration-200 
             hidden group-hover:block
            `}
          >
            Signout
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
