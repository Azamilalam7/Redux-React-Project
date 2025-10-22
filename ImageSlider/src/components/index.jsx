import { useState, useEffect } from "react";

export default function ImageSlider({ url, page = 1, limit= 10 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error , setError] = useState(null);
  const [loading ,setLoading] = useState(false)

  async function fetchImages(getURL) {
    try {
        setLoading(true)

        const response = await fetch(`${getURL}?page${page} & limit=${limit}`);
        const data = await response.json()

        if(data) setImages(data); setLoading(false)


    } catch (error) {
        
        setError(error.message)
        setLoading(false)
    }
  }

  useEffect(() => {
    if (url !== '') {
      fetchImages();
    }
  }, [url]);

console.log(images)

if(loading){
    return <div>Fetching Data !! Please Wait</div>
}

if(error !== null){
    return <div>Error Occured {error}</div>
}

  return <div className="container"></div>
}
