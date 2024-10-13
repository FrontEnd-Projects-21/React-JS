import { useRef, useState } from "react";

const Demo = () => {
  console.log("Rendering........");
  let i = 0;
  const j = useRef(0);
  const [stateClick, setStateClick] = useState(0);
  const handleStateClick = () => {
    const result = stateClick + 1;
    setStateClick(result);
  };
  const handleVariableClick = () => {
    i = i + 1;
    console.log(i);
  };
  const handleRefClick = () => {
    j.current = j.current + 1;
    console.log(j.current);
  };
  return (
    <div className="border border-green-600 w-96 h-64 m-4 p-10 rounded-lg">
      <h1>Demo</h1>
      <button
        className="border border-green-900 text-white rounded-lg bg-green-300"
        onClick={handleStateClick}
      >
        State Click
      </button>
      <span className="m-10">State Value:{stateClick}</span>
      <button
        className="border border-green-900 text-white rounded-lg bg-green-300 mt-4"
        onClick={handleVariableClick}
      >
        Variable Click
      </button>
      <span className="m-10">Variable Value:{i}</span>
      <button
        className="border border-green-900 text-white rounded-lg bg-green-300 mt-4"
        onClick={handleRefClick}
      >
        Ref Click
      </button>
      <span className="m-10">Ref:{j.current}</span>
    </div>
  );
};

export default Demo;
