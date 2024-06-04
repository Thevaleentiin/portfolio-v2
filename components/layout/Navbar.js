import Image from "next/image";
import Menu from "../ui/Menu";


const Navbar = () => {
    return (
        <div className="inline-grid grid-cols-2 w-full justify-items-start items-center fixed top-0 pt-2">
            <div className="ml-9">
            <Image src="/images/logo_pt.svg" alt="Logo" width={51} height={70} />
            </div>
            <div className="flex flex-row justify-self-end">
                <Menu />
            </div>
        </div>
    );
}

export default Navbar;