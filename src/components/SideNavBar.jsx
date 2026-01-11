import React from "react";
import { Check } from "lucide-react";

const SideNavBar = ({
  showLanguage = true,
  userSelectedLang,
  userSelectedDiffLevel,
  selectedLang = "",
  selectedDiffLevel = "",
}) => {
  const language = ["C++", "SQL", "Java", "JavaScript"];
  const difficulty = ["Easy", "Medium", "Hard"];

  return (
    <div className="bg-linear-to-b from-[#0D1E2A] to-[#071416] border-r border-r-white/10 text-white p-10 h-full w-[260px] lg:w-[300px]">
      <div className="text-xl font-bold mb-6">keyPulse</div>

      {/* ✅ Language Section (ONLY when required) */}
      {showLanguage && (
        <div className="mb-6">
          <div className="text-gray-300 mb-2 border-b border-white/10 pb-4">
            Select Language
          </div>

          {language.map((item) => (
            <button
              key={item}
              onClick={() => userSelectedLang(item)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-700 transition-all ${
                selectedLang === item ? "bg-gray-700/50" : ""
              }`}
            >
              <span>{item}</span>
              {selectedLang === item && (
                <Check className="w-4 h-4 text-green-400" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Difficulty Section (COMMON) */}
      <div>
        <div className="text-gray-300 mb-2 border-b border-white/10 pb-4">
          Difficulty Level
        </div>

        {difficulty.map((item) => (
          <button
            key={item}
            onClick={() => userSelectedDiffLevel(item)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-700 transition-all ${
              selectedDiffLevel === item ? "bg-gray-700/50" : ""
            }`}
          >
            <span>{item}</span>
            {selectedDiffLevel === item && (
              <Check className="w-4 h-4 text-green-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideNavBar;
