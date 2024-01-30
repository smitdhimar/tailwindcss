import Image from "next/image";
import Job from "./components/card";

export default function Home() {
  return (
    <div className=" min-h-screen h-full w-full bg-gray-100/25">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
       <Job className=""/>
       <Job className=""/>
       <Job className=""/>
       <Job className=""/>
       <Job className=""/>
       <Job className=""/>
       <Job className=""/>
       <Job className=""/>
       <Job className=""/>
       <Job className=""/>
       <Job className=""/>
       <Job className=""/>

      </div>
      {/* <div className="h-60 w drop-shadow-2xl backdrop-blur-sm">e</div> */}
    </div>
    
  );
}
