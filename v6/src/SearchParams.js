import {useState} from 'react'; //hook always start with use

//in simple term hooks is used to store state that you would like to re-render.

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = ()=>{
  
  const [location, setLocation] = useState("Seattle, WA"); //destructuring
  const [animal,updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const breeds = [];

  return(
      <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" 
          onChange={(e)=>{setLocation(e.target.value)}}
          value={location}
          placeholder="Location" />
        </label>

        <label htmlFor="animal">
        Animal
          <select
          id="animal"
          value={animal}
          onChange={ e =>updateAnimal(e.target.value)}
          onBlur={ e => updateAnimal(e.target.value)}
          >

            <option />
            {
              ANIMALS.map(animal => (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              ))
            }

          </select>
        </label>
        

        <label htmlFor="breed">
        Breed
          <select
          id="breed"
          value={breed}
          onChange={ e =>updateBreed(e.target.value)}
          onBlur={ e => updateBreed(e.target.value)}
          >

            <option />
            {
              breeds.map(breed => (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              ))
            }

          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams