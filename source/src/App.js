import Sinhgadlogo from "./logoSinhgad.png";
import SinhgadBackground from "./blacktop.gif";
import './App.css';
import Logic from "./logic";
import Tldr from "./Appreciation";
function App() {
  return (
    <div className="App bg-black">
      <div className="w-auto h-[20rem] flex  flex-col items-center justify-between bg-black mx-auto relative" >
        <img src={Sinhgadlogo} alt="sinhgad ima" className="w-60 h-70 z-10 absolute " />
        <img src={SinhgadBackground} alt="back" className="w-full h-full absolute object-contain" />
        <a href="https://www.facebook.com/571373033071746/posts/1787434568132247/?sfnsn=wiwspwa" className="font-mono text-2xl text-white z-20 absolute    hover:underline decoration-indigo-500
        hover:animate-pulse pt-[12rem]"> NBN Sinhgad Technical Institude of Engineering.</a>
      </div>
      <h3 className="w-full bg-black text-white font-mono text-right px-3">~Project by <a href="https://twitter.com/kirito08922920" className="hover:underline decoration-gray-500 hover:animate-pulse">•/_\•</a></h3>
      <Logic />
      <Tldr/>
    </div>
  );
}

export default App;
