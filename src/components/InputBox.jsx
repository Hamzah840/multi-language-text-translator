const InputBox = ({ onTextChange, inputText }) => {
  return (
    <>
    <button onClick={() => onTextChange("")} className="bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white rounded-full me-2 text-2xl px-2 pb-1 flex justify-center items-center">&#8634;</button>
      <input
        type="text"
        placeholder="Enter text to translate"
        className="border-2 border-e-0 p-1 px-2 border-pink-500 rounded-md rounded-e-none w-full placeholder:text-pink-500 placeholder:opacity-50 outline-none text-pink-500"
        onChange={(e) => {
          onTextChange(e.target.value);
        }}
        value={inputText}
      />
    </>
  );
};

export default InputBox;
