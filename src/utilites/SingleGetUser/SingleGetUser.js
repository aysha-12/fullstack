export const singleGetUser=async (id)=>{
    const res=await fetch(`http://localhost:7000/news/${id}`,{
        cache:"no-store"
    })
    const data=await res.json();
       
    return data;
}