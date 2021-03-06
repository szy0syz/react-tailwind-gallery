import React, { useState } from "react";

const ImageSearch = ({ setValue }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(text);
  }

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form action="" className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="key words..."
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageSearch;
