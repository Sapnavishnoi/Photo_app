import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
    accessKey: "iKCrhBp9MbL_XxlHiVtgJnDIOF6FkIy5RUfzc4TDrHQ",
  });

export default function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    console.log(query);

    const searchPhotos = async (e) => {
        e.preventDefault();
        unsplash.search
    .photos(query)
    .then(toJson)
    .then((json) => {
        setPics(json.results);
    //   console.log(json);
    });
        console.log("Submitting the Form")
      };
  return (
    <>

<form className="form" onSubmit={searchPhotos}> 
        <label className="label" htmlFor="query"> 
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
    onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list" key={pic.id}>
      {pics.map((pic) => <div className="card">
      <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
      </div> )}
      </div>

    </>
  );
}