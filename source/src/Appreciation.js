import React from "react";
import { BiRightArrow  ,BiLeftArrow} from "react-icons/bi";
import { CgArrowLongRightC } from "react-icons/cg";


const Tldr = () => {
    return (
    <div className="bg-black text-4xl text-white w-full h-96 flex  flex-col justify-center items-center">
            <p className="flex items-center font-mono h-20 hover:underline decoration-green-600 hover:animate-pulse  decoration-wavy  decoration-4"><BiLeftArrow />Contributors<BiRightArrow/></p>
            <div className="w-full h-40 ">
                <div className="flex justify-center gap-4  items-center text-sm">
                    <a href="https://twitter.com/kirito08922920" className="flex items-center hover:animate-pulse hover:underline  decoration-slate-600 "> <BiLeftArrow /> Aryan kathawale </a>
                    <CgArrowLongRightC/>
                    <p className="text-sm flex items-center ">Main contributor  and Design<BiRightArrow /></p>
                </div>
                            <div className="flex justify-center gap-4  items-center text-sm">
                    <a href="https://twitter.com/swapnil_singh15" className="flex items-center hover:animate-pulse hover:underline  decoration-indigo-600 "> <BiLeftArrow /> Archita Singh</a>
                    <CgArrowLongRightC/>
                    <p className="text-sm flex items-center ">Data Extractor<BiRightArrow /></p>
                </div>
            </div>
    </div>);
};

export default Tldr