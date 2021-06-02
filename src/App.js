import {useEffect, useState} from "react";
import axios from "axios";


import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
    const [images, setImages] = useState([])
    const [term, setTerm] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
            .then(({data}) => {
                setImages(data.hits)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [term]);

    return <div className="container mx-auto my-3">
        <ImageSearch searchText={(text) => setTerm(text)}/>

        {
            !loading && images.length === 0 &&
            <div className="flex justify-center mt-32">
                <h1 className="text-6xl">No Images Found...</h1>
            </div>

        }

        {
            loading
                ?
                <div className="flex justify-center mt-32">
                    <h1 className="text-6xl">Loading...</h1>
                </div>
                :
                <div className="grid grid-cols-3 gap-4">
                    {
                        images.map(image =>
                            <ImageCard key={image.id} image={image}/>
                        )
                    }
                </div>
        }
    </div>
}

export default App;
