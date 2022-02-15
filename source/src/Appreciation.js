import React from "react";
import { BiRightArrow  ,BiLeftArrow} from "react-icons/bi";
import { CgArrowLongRightC } from "react-icons/cg";
import monophy from "./monophy.gif";

const Tldr = () => {
    return (
    <div className="bg-black text-4xl text-white w-full h-96 flex  flex-col justify-center items-center font-mono">
            <p className="flex items-center font-mono h-20 hover:underline decoration-green-600 hover:animate-pulse  decoration-wavy  decoration-4"><BiLeftArrow />Contributors<BiRightArrow/></p>
            <div className="w-full h-40 ">
                
                            <div className="flex justify-center gap-4  items-center text-sm">
                    <a href="https://www.instagram.com/aadigawalii/" className="flex items-center hover:animate-pulse hover:underline  decoration-indigo-600  decoration-wavy text-orange-600 decoration-2"> <BiLeftArrow /> Aditya Gawali  </a>
                    <CgArrowLongRightC/>
                    <p className="text-sm flex items-center "> presenter <BiRightArrow /></p>
                </div>
                <div className="flex justify-center gap-4  items-center text-sm">
                    <a href="https://www.instagram.com/sumit_kshirsagar_/" className="flex items-center hover:animate-pulse hover:underline  decoration-red-600 decoration-dotted text-cyan-300 decoration-2"> <BiLeftArrow /> Sumit Kshirsagar</a>
                    <CgArrowLongRightC/>
                    <p className="text-sm flex items-center ">Team Manager<BiRightArrow /></p>
                </div>
                <div className="flex justify-center gap-4  items-center text-sm">
                    <a href="https://www.instagram.com/swaralitantak/" className="flex items-center hover:animate-pulse hover:line-through  decoration-yellow-600 text-[#800000] decoration-2"> <BiLeftArrow /> Swarali Tantak </a>
                    <CgArrowLongRightC/>
                    <p className="text-sm flex items-center ">Database Manager and version control<BiRightArrow /></p>
                </div>
                <div className="flex justify-center gap-4  items-center text-sm">
                    <a href="https://twitter.com/kirito08922920" className="flex items-center hover:animate-pulse hover:underline  decoration-slate-600  decoration-double text-gray-400 decoration-2"> <BiLeftArrow /> Aryan kathawale </a>
                    <CgArrowLongRightC/>
                    <p className="text-sm flex items-center ">Main contributor  and Programmer<BiRightArrow /></p>
                </div>
                                <div className="flex justify-center gap-4  items-center text-sm">
                    <a href="# " className="flex items-center hover:animate-pulse hover:underline  decoration-green-600 text-pink-600  decoration-2"> <BiLeftArrow /> You</a>
                    <CgArrowLongRightC/>
                    <p className="text-sm flex items-center ">for using the project 🖤🖤🖤. <BiRightArrow /></p>
                </div>
                
            </div>
        <div className="w-full flex items-center justify-center  bg-black">
                <img src={monophy} alt="cat code" />
        </div>
    </div>);
}; 




export default Tldr