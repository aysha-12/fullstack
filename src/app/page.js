
import NewsList from "@/ui/LatestNews/NewsList";
import Asideber from "@/ui/Sideber/Asideber";




export default function Home() {

  return (
    <div className=" md:flex px-4  md:px-12 py-5 gap-10">
       <div className="md:w-2/3 "> 
       <NewsList></NewsList>
       </div>
     <div className="md:w-1/3 ">
    <Asideber></Asideber>
     </div>
     
      
    </div>
  );
}
