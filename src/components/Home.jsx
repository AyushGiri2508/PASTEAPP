import React from "react";
import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your paste here"
        className="border-2 border-gray-10 p-2 w-46 h-8 rounded-xl  mt-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button>Create My Paste</button>
    </div>
  );
};

export default Home;
