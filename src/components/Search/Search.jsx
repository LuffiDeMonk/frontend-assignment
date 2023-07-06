import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${term}`);
  };
  return (
    <>
      <form className="h-10 w-full" onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          className="w-full h-full rounded-full outline-none focus:outline-none bg-gray-100 placeholder:text-gray-600 placeholder:text-sm p-4"
          placeholder="Search..."
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </form>
    </>
  );
};

export default Search;
