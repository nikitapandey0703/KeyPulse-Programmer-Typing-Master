import React from "react";

const SideNavBar = ({
  showLanguage = true,
  userSelectedLang,
  userSelectedDiffLevel,
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
              className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 transition-all"
            >
              {item}
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
            className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 transition-all"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideNavBar;
