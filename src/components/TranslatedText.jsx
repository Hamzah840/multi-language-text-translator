import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const TranslatedText = ({ originalText }) => {
  const { text } = useContext(LanguageContext);
  const [translatedWords, setTranslatedWords] = useState("");

  useEffect(() => {
    const fetchTranslation = async () => {
      if (!originalText.trim()) {
        setTranslatedWords("");
      }
      // q=hello%20world&source=en&target=es&format=text&alternatives=3&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
      try {
        const res = await fetch("https://libretranslate.com/translate", {
          method: "POST",
          body: JSON.stringify({
            q: "originalText",
            source: "en",
            target: "es",
            format: "text",
            alternatives: 3,
            api_key: "",
          }),
          headers: {"Content-Type": "application/json"},
        });
        console.log(res);
        const data = res.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching translation:", error);
        setTranslatedWords("Translation unavailable.");
      }
    };
    fetchTranslation();
  }, [originalText, text]);

  return (
    <>
      {/* ORIGINAL TEXT */}
      <div className="min-w-[50vw] min-h-[30vh] rounded-lg bg-white flex items-center justify-center font-semibold border-2 border-pink-500 shadow text-pink-600 flex-col mb-2">
        <p>Original Text:</p>
        <p className="text-violet-600 text-xl">{originalText}</p>
      </div>

      {/* TRANSLATED TEXT */}
      <div className="min-w-[50vw] min-h-[30vh] rounded-lg bg-white flex items-center justify-center font-semibold border-2 border-pink-500 shadow text-pink-600 flex-col">
        <p>
          Translated to <span className="text-teal-500">{text}: </span>
        </p>
        <p className="text-violet-600 text-xl">{TranslatedText}</p>
      </div>
    </>
  );
};

export default TranslatedText;
