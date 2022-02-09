import React,{useState} from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Logic = () => {
    const [cgpa, setcgpa] = useState(0);
    const generate = () => {setcgpa(10)};

return (<div className="font-mono text-white  flex flex-col justify-center items-center  pt-2 w-full h-96">
    <div className="text-3xl flex items-center">CGPA to Percentile Converter <MdOutlineDoubleArrow/></div>
    <div>
        <h1 className="text-xl py-2">Enter the Cgpa</h1>
    <input type="number" className="caret-sky-500  bg-slate-900 focus:outline-none   text-center focus:ring appearance-none focus:border-red-500   rounded-lg text-white   "/>
    </div>
    <button className=" mt-6 w-60 rounded-md  hover:text-white hover:bg-sky-400 bg-slate-900 h-10 ring-sky-500 ring  hover:ring-white" onClick={()=>generate()}>Calculate percentage</button>
    <div className="mt-20 text-xl">
        percentile={cgpa}

    </div>
</div>);
};

export default Logic;