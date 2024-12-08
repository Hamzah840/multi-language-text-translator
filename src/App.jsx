import { useState } from "react";
import InputBox from "./components/InputBox";
import LanguageSelector from "./components/LanguageSelector";
import TranslatedText from "./components/TranslatedText";

const App = () => {
  const [inputText, setInputText] = useState("");
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="min-h-[60vh] min-w-[80vw] bg-slate-800 p-4 m-4 rounded-xl shadow-xl flex flex-col items-center">
        <div className="m-2 flex">
          <InputBox onTextChange={setInputText} inputText={inputText}/>
          <LanguageSelector />
        </div>
        <div className="m-2">
          <TranslatedText originalText={inputText}/>
        </div>
      </div>
    </div>
  );
};

export default App;
