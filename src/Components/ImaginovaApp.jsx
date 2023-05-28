import { useState } from "react";
import ImageCard from "./ImageCard";
import Loader from "./Loader";

const ImaginovaApp = () => {

    const [data, setData] = useState([])
    // console.log('myData', data)
    const [loading, setLoading] = useState(false)

    const handleSearch = (e)=>{
        e.preventDefault();
        const form = e.target;
        const query = form.input.value;

        // console.log(query)
      
      const fetchData = async () => {
        // console.log("inside fetch func", query)
        setLoading(true)
        try {
          const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=4ER4bOJv5H4zdYbCXZWJJUoUVxAWmbzylfZuReuTYpI`);
          const jsonData = await response.json();
          
          setData(jsonData.results)
          setLoading(false)
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
      fetchData()
    }

    // if(loading){
    //     return <Loader/>
    // }
    
    return (
        <>
            <div>
                <div className='bg-[#8a5353] w-full h-[30vh] flex justify-center items-center'>
                    <div className='w-full'>
                        <h1 className='text-4xl font-bold text-center text-white'>Imaginova</h1>
                        <p className='text-center text-white pt-3'>Unleash Your Creative Vision with Endless Image Possibilities</p>
                        <div className='text-center mt-8'>
                            <form onSubmit={handleSearch}>
                                <input className='rounded-l-lg h-10 pl-2' type="text" name="input" id="query" placeholder="Search anything..." required/>
                                <button type="submit" className='bg-black text-white px-5 py-[10px] rounded-r-lg'>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* canvas  */}

            <div>
                <div>
                {data.length > 0 ?
                <h1 className="text-3xl font-bold text-center py-10">Founded Image</h1>
                :
                <h1 className="text-3xl font-bold text-center py-10">You haven't searched yet</h1>
            }
                </div>


                <div className="max-w-[1480px] m-auto grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {data.length > 0 ? data.map(item => <ImageCard
                    key={item.id}
                    item={item}
                    />)
                     : ''}
                   
                </div>
            </div>

            <div>
                {loading ? <Loader/> : ''}
            </div>
        </>
    );
};

export default ImaginovaApp;