import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-row">
            <div>
                <Image src="/images/logo_pt.svg" alt="Logo" width={51} height={70} />
                <p>Valentin Kahn-Barberon</p>
            </div>
            <div>
                <p>Travaillons ensemble !</p>
            </div>
            <div>
                <ul className="flex flex-row">
                    <li>Logo 1</li>
                    <li>Logo 2</li>
                    <li>Logo 3</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;