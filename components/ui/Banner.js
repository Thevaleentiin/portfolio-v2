const Banner = ({role, contexte, annee}) => {
    return (
        <div className="bg-[#CA3531] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 xs:w-3/5 mx-auto h-auto xs:h-40">
            <ul className="flex flex-col xs:flex-row gap-2 justify-around items-center h-full my-4 xs:my-0">
                <li className="flex flex-col justify-center items-center">
                    <span className="font-rubik font-bold">Rôle</span>
                    <p className="font-shanti">{role}</p>
                </li>
                <li className="flex flex-col justify-center items-center">
                    <span className="font-rubik font-bold">Contexte</span>
                    <p className="font-shanti">{contexte}</p>
                </li>
                <li className="flex flex-col justify-center items-center">
                    <span className="font-rubik font-bold">Année</span>
                    <p className="font-shanti">{annee}</p>
                </li>
            </ul>
        </div>
    );
}

export default Banner;