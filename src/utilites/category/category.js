export const category = async()=>{
   const res=await fetch("http://localhost:7000/category",{
        
            caches:"force-caches"
    })
    const data=await res.json()
    return data
}