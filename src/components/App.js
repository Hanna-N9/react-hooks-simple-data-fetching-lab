import { useState, useEffect } from "react";

export default function App() {
  const [dog, setDog] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const dogAPI = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    fetch(dogAPI)
      .then(res => res.json())
      .then(data => {
        setDog(data.message);
        setIsLoading(true);
      });
  }, []);

  //Display a <p> tag with the text of "Loading..." when the component is first rendered - if data hasn't been rendered, show an indicator
  if (!isloading) return <p>Loading...</p>;

  return <img src={dog} alt="A Random Dog" />;
}
