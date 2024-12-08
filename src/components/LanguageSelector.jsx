import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSelector = () => {
  const { text, setText } = useContext(LanguageContext);
  return (
    <>
      <select
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="border-2 border-s-0 px-4 border-pink-500 rounded-md rounded-s-none placeholder:text-pink-500 outline-none text-pink-500"
      >
        <option disabled>Select</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="German">German</option>
      </select>
    </>
  );
};

export default LanguageSelector;
