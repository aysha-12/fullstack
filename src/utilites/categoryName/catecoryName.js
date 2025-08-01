export const catrgoryName=async (category)=>{
    const res=await fetch(`http://localhost:7000/news?categories=${category}`,{
        caches:"no-store"
    })
    const data=await res.json()
    return data

}