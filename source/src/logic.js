import React,{useState,useEffect} from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { TiArrowRightThick } from "react-icons/ti";
import { AiOutlineAntDesign } from "react-icons/ai";

const Logic = () => {
    const [cgpa, setcgpa] = useState(0.0);
    const [percentile,setpercentile]=useState(0);
    const [BackgroundColor,setBackgroundColor]=useState("text-green-500");
    const [grade,setgrade]=useState("--");
    const [visible ,setvisible]=useState(false);
    const generate=()=>{
        setvisible(true);
        if(cgpa<4){
            setgrade("F");
            setpercentile(0);
            setBackgroundColor("text-red-500");
        }else if(cgpa<4.75){
            setgrade("D");
            setpercentile(cgpa*6.6+13.6);
            setBackgroundColor("text-green-500");
        }else if(cgpa<5.25){
            setBackgroundColor("text-green-500");
            setgrade("C");
            setpercentile(10*cgpa-2.5);
        }else if(cgpa<5.75){
            setBackgroundColor("text-green-500");
            setgrade("B");
            setpercentile(10*cgpa-2.5);
        }else if(cgpa<6.75){
            setBackgroundColor("text-green-500");
            setgrade("B+");
            setpercentile(5*cgpa+26.5);
        }else if(cgpa<8.25){
            setBackgroundColor("text-green-500");
                        setgrade("A");
            setpercentile(10*cgpa-7.5);
        }else if(cgpa <9.5){
            setBackgroundColor("text-green-500");
                        setgrade("A+");
            setpercentile(12*cgpa-25);
        }else if(cgpa>=10){
                        setgrade("O");
            setpercentile(20*cgpa-100);
            setBackgroundColor("text-yellow-500");
        }

    };
    useEffect(()=>{
        setvisible(false);
    }   
        ,[cgpa])

return (<div className="font-mono text-white  flex flex-col justify-center items-center  pt-2 w-full h-96">
    <div className="text-3xl flex items-center">CGPA to Percentage Converter <MdOutlineDoubleArrow/></div>
    <div className="flex flex-col">
        <h1 className="text-xl py-2">Enter the Cgpa</h1>
    <input type="range"  className="caret-sky-500  bg-slate-900 focus:outline-none   text-center focus:ring appearance-none focus:border-red-500   rounded-full text-white w-96   h-6 " value={cgpa} onChange={e=>setcgpa(parseFloat(e.target.value))} min="0" max="10" step="0.01" />{cgpa}
    </div>
    <button className=" mt-6 w-60 rounded-md  hover:text-white hover:bg-sky-400 bg-slate-900 h-10 ring-sky-500 ring  hover:ring-white  flex items-center justify-center" onClick={()=>generate()}><AiOutlineAntDesign/>Calculate percentage<AiOutlineAntDesign/></button>
    <div className={`${visible?"visible":"invisible"} font-mono text-xl w-96 h-50 flex flex-col ring ring-indigo-500 mt-10 rounded-lg animate-pulse`}>
        <div className={`  ${BackgroundColor} text-3xl flex justify-evenly`}>
            <h1 className="flex gap-2 items-center ">
                grade<TiArrowRightThick/>
            </h1>{grade}
        </div>
        <div className="flex items-center justify-evenly text-3xl" > 
            <h1 className="flex items-center justify-evenly">percentage <TiArrowRightThick/></h1>
            {percentile}
        </div>
        <div className="flex items-center justify-evenly text-2xl" > 
            <h1 className="flex items-center justify-evenly">cgpa<TiArrowRightThick/></h1>
            {cgpa}
        </div>
    </div>
</div>);
};

export default Logic;