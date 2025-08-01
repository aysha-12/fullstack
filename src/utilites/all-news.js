export const news=async ()=>{

    const res=await fetch('http://localhost:7000/all-news',{
    caches:"force-caches"

    })
   
    const data=await res.json();
    return data
}