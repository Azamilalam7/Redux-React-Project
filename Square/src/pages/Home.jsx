import React from "react";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { InputContext } from "../context/Input";

const Home = () => {
  // const [input, setInput] = useState("");

  const [input ,setInput] = useContext(InputContext)

  return (
    <div>
      <Navbar />
      <div className="text-[4vw]"> Home</div>

      <div className="flex justify-center mt-35">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="number"
          placeholder="Enter Number"
          className="w-38 px-3 py-2 border border-blue-300 rounded-full focus:ring-2 focus:ring-black outline-none"
        />

        <button
          // onClick={handleSumbit}
          className="w-20 border border-blue-300 mx-1.5 rounded-full text-white bg-black"
        >
          Save
        </button>
        

        <p className="mt-2 text-center ml-1.5 text-lg font-semibold text-gray-800">
          Square = {input * input}
        </p>
      </div>
    </div>
  );
};

export default Home;
