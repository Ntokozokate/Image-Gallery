import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import ErrorPage from "../ErrorPage";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_PIXABAY_API_KEY
      }&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the response to inspect the data
        setImages(data.hits); // Store the image results in state
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch((err) => console.log(err));

    //console.log("API Key:", import.meta.env.VITE_PIXABAY_API_KEY); // Debug your API key
  }, [term]); // Add 'term' as a dependency

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <ErrorPage />}
      {isLoading ? (
        <h1 className="text-6xl flex items-center justify-center  font-bold">
          {" "}
          Loading....
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}
